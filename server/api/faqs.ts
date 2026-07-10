import faqsData from '../data/faqs.json'

export default defineEventHandler((event) => {
  try {
    const query = getQuery(event)
    // ⚡ Bolt: Implemented ES module JSON import to cache data in memory and eliminate fs.readFile overhead per request.
    // Assigned to a mutable variable since we use non-mutating Array.filter() below.
    let items = faqsData
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
