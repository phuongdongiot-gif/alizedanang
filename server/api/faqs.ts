// ⚡ Bolt Optimization: Use direct ES module import to cache JSON data in memory, avoiding slow fs.readFile operations and process.cwd() issues.
import rawItems from '../data/faqs.json'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    let items = rawItems
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
