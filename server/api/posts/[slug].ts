import posts from '../../data/posts.json'

export default defineEventHandler((event) => {
  // ⚡ Bolt: Importing static JSON directly caches data in memory, avoiding slow fs disk I/O on every request
  const slug = getRouterParam(event, 'slug')

  const post = posts.find((i: any) => i.slug === slug)
  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
