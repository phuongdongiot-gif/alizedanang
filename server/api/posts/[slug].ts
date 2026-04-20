// ⚡ Bolt Optimization: Replace slow per-request fs.readFile and JSON.parse
// with direct ES module import to cache data in memory at build time.
import postsData from '../../data/posts.json'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const post = postsData.find((i: any) => i.slug === slug)

  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  return post
})
