import postsData from '../data/posts.json'

export default defineEventHandler((event) => {
  // Optimization: Import static JSON data instead of reading from file system per request
  return postsData
})
