import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'

const repoRoot = process.cwd()
const reportPath = path.join(repoRoot, 'unused_public_assets.json')
const publicDir = path.join(repoRoot, 'public')

function toFsPathFromWeb(webPath) {
  const rel = webPath.startsWith('/') ? webPath.slice(1) : webPath
  return path.join(publicDir, ...rel.split('/'))
}

function isTracked(relPathPosix) {
  const res = spawnSync('git', ['ls-files', '--error-unmatch', relPathPosix], {
    cwd: repoRoot,
    stdio: 'ignore',
    windowsHide: true,
  })
  return res.status === 0
}

function gitRm(relPathPosix) {
  const res = spawnSync('git', ['rm', '-f', '--', relPathPosix], {
    cwd: repoRoot,
    stdio: 'inherit',
    windowsHide: true,
  })
  if (res.status !== 0) {
    throw new Error(`git rm failed for ${relPathPosix}`)
  }
}

function unlinkFile(absPath) {
  fs.unlinkSync(absPath)
}

function tryRemoveEmptyDirs(startAbsDir) {
  let cur = startAbsDir
  while (cur.startsWith(publicDir)) {
    try {
      const entries = fs.readdirSync(cur)
      if (entries.length > 0) break
      fs.rmdirSync(cur)
      cur = path.dirname(cur)
    } catch {
      break
    }
  }
}

if (!fs.existsSync(reportPath)) {
  console.error('Missing unused_public_assets.json. Run scripts/find-unused-public-assets.mjs first.')
  process.exit(1)
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
const unused = Array.isArray(report?.unused) ? report.unused : []

let deleted = 0
let missing = 0
let removedDirs = 0 // best-effort count (approx)

for (const webPath of unused) {
  const abs = toFsPathFromWeb(webPath)
  const relToRepo = path.relative(repoRoot, abs)
  const relPosix = relToRepo.split(path.sep).join('/')

  if (!fs.existsSync(abs)) {
    missing++
    continue
  }

  if (isTracked(relPosix)) {
    gitRm(relPosix)
  } else {
    unlinkFile(abs)
  }
  deleted++

  const parent = path.dirname(abs)
  const before = parent
  tryRemoveEmptyDirs(parent)
  if (!fs.existsSync(before)) removedDirs++
}

console.log(`Deleted files: ${deleted}`)
console.log(`Missing (already gone): ${missing}`)
console.log(`Removed empty dirs (approx): ${removedDirs}`)


