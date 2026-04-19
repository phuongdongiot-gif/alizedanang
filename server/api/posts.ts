import postsData from '../data/posts.json'

// ⚡ Bolt: Use direct JSON import to cache data in memory instead of reading from disk on every request
export default defineEventHandler((event) => {
  return postsData
})
