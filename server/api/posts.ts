// Optimization: Direct static JSON import to cache in memory and avoid inefficient fs.readFile operations
import postsData from '../data/posts.json'

export default defineEventHandler(async (event) => {
  return postsData
})
