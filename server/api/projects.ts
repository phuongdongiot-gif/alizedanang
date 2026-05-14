import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  // Direct static import caches data in memory, avoiding inefficient fs.readFile per request
  return projectsData
})
