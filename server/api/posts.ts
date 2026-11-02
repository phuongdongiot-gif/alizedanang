import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  // Optimization: Return pre-loaded ES module data directly
  return postsData
})
