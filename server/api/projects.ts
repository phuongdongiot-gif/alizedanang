// ⚡ Bolt Optimization: Load JSON data statically via ES Module import
// Why: Prevents disk I/O (fs.readFile) on every API request.
// Impact: Data is cached in memory at startup, improving response times significantly and avoiding potential 500 errors if the disk is busy.
import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  return projectsData
})
