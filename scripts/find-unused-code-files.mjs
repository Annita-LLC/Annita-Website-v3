import fs from 'fs'
import path from 'path'

const repoRoot = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  'out',
  'coverage',
  'public',
])

const CODE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'])

// Only evaluate "code files that can be imported" (ignore Next route conventions in app/)
function walkFiles(rootAbs) {
  const out = []
  const stack = [rootAbs]
  while (stack.length) {
    const cur = stack.pop()
    let entries
    try {
      entries = fs.readdirSync(cur, { withFileTypes: true })
    } catch {
      continue
    }
    for (const ent of entries) {
      const abs = path.join(cur, ent.name)
      if (ent.isDirectory()) {
        if (!IGNORE_DIRS.has(ent.name)) stack.push(abs)
      } else if (ent.isFile()) {
        out.push(abs)
      }
    }
  }
  return out
}

function isCodeFile(abs) {
  return CODE_EXTS.has(path.extname(abs).toLowerCase())
}

function toPosix(p) {
  return p.split(path.sep).join('/')
}

function stripExt(p) {
  return p.replace(/\.(ts|tsx|js|jsx|mjs|cjs)$/i, '')
}

function resolveImport(fromAbs, spec) {
  // Ignore node/bare imports
  const isAliased = spec.startsWith('@/')
  if (!isAliased && !spec.startsWith('.') && !spec.startsWith('/')) return null

  const base = isAliased
    ? path.join(repoRoot, spec.slice(2))
    : spec.startsWith('/')
      ? path.join(repoRoot, spec.slice(1))
      : path.resolve(path.dirname(fromAbs), spec)

  // Try direct file
  for (const ext of ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']) {
    const f = base + ext
    if (fs.existsSync(f) && fs.statSync(f).isFile()) return f
  }
  // Try index files
  for (const ext of ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs']) {
    const f = path.join(base, 'index' + ext)
    if (fs.existsSync(f) && fs.statSync(f).isFile()) return f
  }
  return null
}

function extractImports(code) {
  // Covers: import ... from 'x', export ... from 'x', dynamic import('x'), require('x')
  const out = new Set()
  const patterns = [
    /\bimport\s+(?:type\s+)?[\s\S]*?\sfrom\s+['"]([^'"]+)['"]/g,
    /\bexport\s+[\s\S]*?\sfrom\s+['"]([^'"]+)['"]/g,
    /\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
    /\brequire\s*\(\s*['"]([^'"]+)['"]\s*\)/g,
  ]
  for (const re of patterns) {
    for (const m of code.matchAll(re)) out.add(m[1])
  }
  return Array.from(out)
}

function entrypoints() {
  const appDir = path.join(repoRoot, 'app')
  const entries = []
  if (!fs.existsSync(appDir)) return entries

  const appFiles = walkFiles(appDir).filter((f) => isCodeFile(f))
  // Treat Next app route special files as roots
  const special = new Set([
    'page',
    'layout',
    'template',
    'loading',
    'error',
    'not-found',
    'route',
  ])
  for (const abs of appFiles) {
    const base = path.basename(abs, path.extname(abs))
    if (special.has(base)) entries.push(abs)
  }
  return entries
}

const allCodeFilesAbs = walkFiles(repoRoot).filter(isCodeFile)
const allCodeSet = new Set(allCodeFilesAbs.map((p) => path.resolve(p)))

const roots = entrypoints()
const visited = new Set()
const queue = [...roots]
const debug = process.env.DEBUG_UNUSED_CODE === '1'
let debugPrinted = false

while (queue.length) {
  const cur = queue.pop()
  const abs = path.resolve(cur)
  if (visited.has(abs)) continue
  visited.add(abs)

  let code = ''
  try {
    code = fs.readFileSync(abs, 'utf8')
  } catch {
    continue
  }
  const specs = extractImports(code)

  if (debug && !debugPrinted) {
    debugPrinted = true
    console.log('[debug] first entry:', toPosix(path.relative(repoRoot, abs)))
    console.log('[debug] imports found:', specs)
  }

  for (const spec of specs) {
    const resolved = resolveImport(abs, spec)
    if (debug && !resolved) {
      console.log('[debug] unresolved import:', spec)
    }
    if (!resolved) continue
    const real = path.resolve(resolved)
    if (debug && !allCodeSet.has(real)) {
      console.log('[debug] resolved but not in code set:', spec, '->', toPosix(path.relative(repoRoot, real)))
    }
    if (allCodeSet.has(real) && !visited.has(real)) queue.push(real)
  }
}

// Candidates: code files not reachable from app roots, excluding app/ itself (routes are entries)
const candidates = allCodeFilesAbs
  .filter((abs) => {
    const rel = path.relative(repoRoot, abs)
    if (rel.startsWith(`app${path.sep}`)) return false
    return !visited.has(path.resolve(abs))
  })
  .map((abs) => toPosix(path.relative(repoRoot, abs)))
  .sort((a, b) => a.localeCompare(b))

const report = {
  totals: {
    codeFiles: allCodeFilesAbs.length,
    entrypoints: roots.length,
    reachable: visited.size,
    candidates: candidates.length,
  },
  candidates,
}

fs.writeFileSync(
  path.join(repoRoot, 'unused_code_files.json'),
  JSON.stringify(report, null, 2),
  'utf8'
)

console.log(`Code files: ${report.totals.codeFiles}`)
console.log(`Entrypoints: ${report.totals.entrypoints}`)
console.log(`Reachable: ${report.totals.reachable}`)
console.log(`Candidates: ${report.totals.candidates}`)
console.log('Wrote: unused_code_files.json')


