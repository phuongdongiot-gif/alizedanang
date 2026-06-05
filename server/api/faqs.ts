import faqs from '../data/faqs.json'

// ⚡ Bolt: Cache faqs in memory by directly importing the JSON module, avoiding inefficient fs.readFile and JSON.parse on every request.
export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)
    let items = faqs
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
