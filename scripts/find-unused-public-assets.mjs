import fs from 'fs'
import path from 'path'

const repoRoot = process.cwd()
const publicDir = path.join(repoRoot, 'public')

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  'out',
  'coverage',
])

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.webmanifest',
  '.md',
  '.mdx',
  '.css',
  '.scss',
  '.sass',
  '.less',
  '.html',
  '.txt',
  '.xml',
])

const ALWAYS_KEEP_PUBLIC_WEB_PATHS = new Set([
  '/robots.txt',
  '/sitemap.xml',
  '/site.webmanifest',
  '/browserconfig.xml',
  '/favicon.ico',
  '/favicon.png',
  '/favicon.svg',
])

function toPosix(p) {
  return p.split(path.sep).join('/')
}

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

function isTextFile(absPath) {
  return TEXT_EXTS.has(path.extname(absPath).toLowerCase())
}

function normalizeRef(ref) {
  // remove query/hash, trim whitespace
  const trimmed = ref.trim()
  const noQuery = trimmed.split('?')[0].split('#')[0]
  return noQuery
}

if (!fs.existsSync(publicDir)) {
  console.error('No public/ directory found.')
  process.exit(1)
}

const publicFilesAbs = walkFiles(publicDir)
const publicWebPaths = publicFilesAbs.map((abs) => {
  const rel = path.relative(publicDir, abs)
  return '/' + toPosix(rel)
})

const publicWebPathSet = new Set(publicWebPaths)

// Scan repo text files for direct occurrences of each public path. This is slower than a regex
// approach, but is more accurate across odd quoting/spacing cases (especially Windows paths).
const repoFilesAbs = walkFiles(repoRoot).filter((abs) => {
  const rel = path.relative(repoRoot, abs)
  // Skip generated report(s) and large vendored dirs
  if (rel === 'unused_public_assets.json') return false
  if (rel === 'unused_public_assets.txt') return false
  if (rel.startsWith(`unused_public_assets.`)) return false
  // Only scan text files (including public text like webmanifest/xml)
  return isTextFile(abs)
})

const foundRefs = new Set()
const remaining = new Set(publicWebPaths)

function variantsFor(webPath) {
  const decoded = webPath
  const encodedSpaces = webPath.replaceAll(' ', '%20')
  const noLeadingSlash = webPath.startsWith('/') ? webPath.slice(1) : webPath
  const encodedNoLeadingSlash = encodedSpaces.startsWith('/') ? encodedSpaces.slice(1) : encodedSpaces
  return [decoded, encodedSpaces, noLeadingSlash, encodedNoLeadingSlash].filter(Boolean)
}

const variantsCache = new Map()
for (const p of publicWebPaths) variantsCache.set(p, variantsFor(p))

for (const abs of repoFilesAbs) {
  if (remaining.size === 0) break
  let content
  try {
    content = fs.readFileSync(abs, 'utf8')
  } catch {
    continue
  }
  // Quick skip: if file contains no slash, it can't reference public web paths
  if (!content.includes('/')) continue

  for (const p of Array.from(remaining)) {
    const variants = variantsCache.get(p) || [p]
    if (variants.some((v) => content.includes(v))) {
      foundRefs.add(p)
      remaining.delete(p)
    }
  }
}

// Include always-keep paths if they exist
for (const p of ALWAYS_KEEP_PUBLIC_WEB_PATHS) {
  if (publicWebPathSet.has(p)) foundRefs.add(p)
}

const unused = publicWebPaths
  .filter((p) => !foundRefs.has(p))
  .sort((a, b) => a.localeCompare(b))

const used = Array.from(foundRefs).sort((a, b) => a.localeCompare(b))

const report = {
  totals: {
    publicFiles: publicWebPaths.length,
    used: used.length,
    unused: unused.length,
  },
  unused,
}

const outPath = path.join(repoRoot, 'unused_public_assets.json')
fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8')

console.log(`Public files: ${report.totals.publicFiles}`)
console.log(`Used: ${report.totals.used}`)
console.log(`Unused: ${report.totals.unused}`)
console.log(`Wrote: ${path.relative(repoRoot, outPath)}`)


