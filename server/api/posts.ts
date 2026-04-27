// ⚡ Bolt Optimization: Use direct import instead of fs.readFile
// Nuxt's Nitro server natively supports ES module imports of JSON files.
// This bundles and caches the data in memory, avoiding inefficient filesystem reads on every request.
import data from '../data/posts.json'

export default defineEventHandler((event) => {
  return data
})
