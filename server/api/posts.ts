import postsData from '../data/posts.json'

export default defineEventHandler((event) => {
  // Direct static import caches data in memory, avoiding inefficient fs.readFile per request
  return postsData
})
