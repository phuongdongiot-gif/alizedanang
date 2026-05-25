// ⚡ Bolt: Replaced dynamic fs.readFile with direct ES module JSON import for in-memory caching and bundler friendliness
import defaultItems from '../data/faqs.json'

export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)
    let items = defaultItems
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
