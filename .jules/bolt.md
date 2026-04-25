## 2024-04-25 - Avoid fs.readFile for static JSON data in Nuxt server endpoints
**Learning:** Using `fs.readFile` dynamically within Nuxt server endpoints forces disk I/O on every API request. Nuxt natively supports bundling JSON files statically using ES Module imports (e.g. `import data from '../data.json'`), which places the data in memory.
**Action:** When a server endpoint returns static JSON data, import the JSON file directly at the top of the file instead of reading it from the filesystem dynamically. This significantly improves response times by avoiding file operations.
