import postsData from '../../data/posts.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')

  // Direct static import caches data in memory, avoiding inefficient fs.readFile per request
  const post = postsData.find((i: any) => i.slug === slug)

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
