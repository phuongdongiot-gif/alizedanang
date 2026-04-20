// ⚡ Bolt Optimization: Replace slow per-request fs.readFile and JSON.parse
// with direct ES module import to cache data in memory at build time.
import faqsData from '../data/faqs.json'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let items = faqsData

  if (query.project_id) {
    items = items.filter((i: any) => i.project_id === Number(query.project_id))
  }

  return items
})
