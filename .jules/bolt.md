## 2024-05-24 - Static Data Caching in Nuxt/Nitro
**Learning:** In Nuxt/Nitro production builds, raw static files are not automatically included unless explicitly configured. Relying on `fs.readFile` dynamically fails or requires extra config, and is inefficient for static data.
**Action:** Utilize ES module imports for JSON files in Nuxt API routes. This bundles the static JSON data directly into the build, avoiding runtime IO overhead and bypassing missing static file issues in production.
