import posts from '../data/posts.json'

export default defineEventHandler((event) => {
  // ⚡ Bolt: Importing static JSON directly caches data in memory, avoiding slow fs disk I/O on every request
  return posts
})
