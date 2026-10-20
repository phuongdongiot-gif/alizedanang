## 2025-02-24 - Static JSON Performance in Nuxt/Nitro
**Learning:** Nuxt/Nitro API routes reading from process.cwd() using fs.readFile cause performance bottlenecks due to continuous disk I/O and JSON parsing on every request, and can fail in production if static assets aren't explicitly included in the build.
**Action:** Use ES module imports (e.g. import data from './data.json') for static JSON files to bundle them directly into the build and cache the parsed data in memory as a read-only constant.
