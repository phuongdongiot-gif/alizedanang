// ⚡ Bolt Optimization: Use direct import instead of fs.readFile
// Nuxt's Nitro server natively supports ES module imports of JSON files.
// This bundles and caches the data in memory, avoiding inefficient filesystem reads on every request.
import data from '../data/faqs.json'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let items = data

  if (query.project_id) {
    items = items.filter((i: any) => i.project_id === Number(query.project_id))
  }

  return items
})
