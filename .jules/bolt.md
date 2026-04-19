## 2024-05-24 - Nuxt 3 / Nitro Serverless Runtime Errors with fs.readFile
**Learning:** Nuxt 3's Nitro engine does not bundle static data files read dynamically via `fs.readFile` and `process.cwd()` at runtime. This causes 500 errors when deployed to serverless environments (Vercel, AWS Lambda) due to differing file structures.
**Action:** Use direct ES module imports (e.g., `import data from '../data.json'`) to allow the bundler to automatically resolve, include, and cache the JSON data in memory at load time, simultaneously preventing deployment bugs and eliminating disk I/O.
