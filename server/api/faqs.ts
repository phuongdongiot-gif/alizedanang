// ⚡ Bolt Optimization: Load JSON data statically via ES Module import
// Why: Prevents disk I/O (fs.readFile) on every API request.
// Impact: Data is cached in memory at startup, improving response times significantly and avoiding potential 500 errors if the disk is busy.
import faqsData from '../data/faqs.json'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let items = faqsData

  if (query.project_id) {
    items = items.filter((i: any) => i.project_id === Number(query.project_id))
  }

  return items
})
