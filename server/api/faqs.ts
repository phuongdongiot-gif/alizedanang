import allItems from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)

    // ⚡ Bolt: Cache JSON data in memory using direct ES module import to avoid expensive disk I/O on every request
    let items = allItems
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
