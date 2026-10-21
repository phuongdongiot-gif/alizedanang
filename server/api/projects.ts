import projectsData from '../data/projects.json'

export default defineEventHandler((event) => {
  // Optimization: Import static JSON data instead of reading from file system per request
  return projectsData
})
