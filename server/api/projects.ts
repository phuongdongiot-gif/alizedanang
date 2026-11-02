import projectsData from '../data/projects.json'

export default defineEventHandler(async (event) => {
  // Optimization: Return pre-loaded ES module data directly
  return projectsData
})
