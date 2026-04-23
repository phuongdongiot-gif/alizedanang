## 2024-05-24 - Static JSON Imports for Better Backend API Performance

**Learning:** Reading static JSON data using `fs.readFile` on every API request in Nitro/Nuxt is a severe performance anti-pattern. This incurs constant disk I/O and JSON parsing overhead per request, and it may fail entirely in serverless production environments (like Vercel or Netlify) that rely on static routing/assets instead of dynamic `process.cwd()` disk reading. Nuxt correctly supports direct JSON module imports, which parses the JSON once and caches it indefinitely in module memory during build/startup.

**Action:** Whenever a backend endpoint needs to read immutable, static data from a local JSON file, always use static `import data from '../data/file.json'` instead of dynamic `fs.readFile` and `JSON.parse`.
