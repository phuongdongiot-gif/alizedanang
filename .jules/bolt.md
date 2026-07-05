## 2024-05-24 - Optimize backend data loading in Nuxt Nitro
**Learning:** Dynamic `fs.readFile` combined with `process.cwd()` is inefficient and error-prone in Nuxt Nitro production builds, as it requires re-reading files from disk on every request and `process.cwd()` might not point to the expected directory.
**Action:** Use ES module JSON imports (e.g., `import data from '../data.json'`) instead. Nitro natively supports this, bundling and caching the data in memory. Remember to treat the imported data as read-only constants.
