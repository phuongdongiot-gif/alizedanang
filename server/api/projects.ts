// Optimization: Direct static JSON import to cache in memory and avoid inefficient fs.readFile operations
import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  return projectsData
})
