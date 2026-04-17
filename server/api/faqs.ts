import faqs from '../data/faqs.json'

export default defineEventHandler((event) => {
  // ⚡ Bolt: Importing static JSON directly caches data in memory, avoiding slow fs disk I/O on every request
  const query = getQuery(event)
  let items = faqs

  if (query.project_id) {
    items = items.filter((i: any) => i.project_id === Number(query.project_id))
  }

  return items
})
