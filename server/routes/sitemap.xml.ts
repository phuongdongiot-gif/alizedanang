import projects from '../data/projects.json'
import posts from '../data/posts.json'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://alizedanang.vn'
  
  // Static routes
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/vi-tri', changefreq: 'monthly', priority: 0.8 },
    { url: '/mat-bang', changefreq: 'monthly', priority: 0.8 },
    { url: '/tien-ich', changefreq: 'monthly', priority: 0.8 },
    { url: '/thu-vien', changefreq: 'monthly', priority: 0.7 },
    { url: '/tin-tuc', changefreq: 'daily', priority: 0.8 },
    { url: '/lien-he', changefreq: 'monthly', priority: 0.5 },
  ]
  
  try {
    // ⚡ Bolt: Importing JSON directly caches it in memory and bundles it efficiently
    
    // Dynamic routes (Projects)
    projects.forEach((p: any) => {
      routes.push({
        url: `/du-an/${p.slug}`,
        changefreq: 'weekly',
        priority: 0.9
      })
    })
    
    // Dynamic routes (Posts)
    posts.forEach((p: any) => {
      routes.push({
        url: `/tin-tuc/${p.slug}`,
        changefreq: 'weekly',
        priority: 0.7
      })
    })
  } catch (err) {
    console.error('Error generating sitemap data:', err)
  }

  event.node.res.setHeader('Content-Type', 'text/xml')
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(r => `
  <url>
    <loc>${baseUrl}${r.url}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>
  `).join('')}
</urlset>`

  return xml
})
