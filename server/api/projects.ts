// Optimization: Cached static JSON in memory via ES module import
import projectsData from '../data/projects.json' with { type: 'json' }

export default defineEventHandler((event) => {
  return projectsData
})
