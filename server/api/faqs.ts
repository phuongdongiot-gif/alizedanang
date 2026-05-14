import faqsData from '../data/faqs.json'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  // Direct static import caches data in memory, avoiding inefficient fs.readFile per request
  let items = faqsData

  if (query.project_id) {
    // Note: Array.filter() returns a new array, ensuring we don't mutate the cached module export
    items = items.filter((i: any) => i.project_id === Number(query.project_id))
  }

  return items
})
