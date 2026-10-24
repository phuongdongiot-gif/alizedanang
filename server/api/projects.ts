import projects from '../data/projects.json'

export default defineEventHandler(async (event) => {
  return projects
})
