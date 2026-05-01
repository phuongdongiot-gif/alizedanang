// ⚡ Bolt: Imported statically to cache JSON data in memory, avoiding blocking fs.readFile & JSON.parse on every request.
import data from '../data/posts.json'

export default defineEventHandler((event) => {
  return data
})
