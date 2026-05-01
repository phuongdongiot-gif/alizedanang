// ⚡ Bolt: Imported statically to cache JSON data in memory, avoiding blocking fs.readFile & JSON.parse on every request.
import items from '../../data/posts.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  const post = items.find((i: any) => i.slug === slug)
  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
