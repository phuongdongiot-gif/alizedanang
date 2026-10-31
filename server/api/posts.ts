// Optimization: Cached static JSON in memory via ES module import
import postsData from '../data/posts.json' with { type: 'json' }

export default defineEventHandler((event) => {
  return postsData
})
