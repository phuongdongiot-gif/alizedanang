import rawFaqs from '../data/faqs.json'

// ⚡ Bolt Optimization:
// Importing JSON natively caches the object in memory, avoiding synchronous
// fs.readFile and JSON.parse operations blocking the event loop on every request.
// We shallow copy the imported JSON to avoid mutating the globally cached object.
const faqs = [...rawFaqs]

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    
    if (query.project_id) {
      return faqs.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return faqs
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
