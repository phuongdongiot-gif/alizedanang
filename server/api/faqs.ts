// ⚡ Bolt: Imported statically to cache JSON data in memory, avoiding blocking fs.readFile & JSON.parse on every request.
import data from '../data/faqs.json'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let items = data

  if (query.project_id) {
    items = items.filter((i: any) => i.project_id === Number(query.project_id))
  }

  return items
})
