import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const dataPath = path.resolve(process.cwd(), 'server/data/faqs.json')
    const data = await fs.readFile(dataPath, 'utf-8')
    let items = JSON.parse(data)
    
    if (query.project_id) {
      items = items.filter((i: any) => i.project_id === Number(query.project_id))
    }
    
    return items
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Failed to load faqs' })
  }
})
