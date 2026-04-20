// ⚡ Bolt Optimization: Replace slow per-request fs.readFile and JSON.parse
// with direct ES module import to cache data in memory at build time.
import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  return projectsData
})
