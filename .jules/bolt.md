## 2024-05-18 - Direct JSON Imports in Nuxt/Nitro
**Learning:** In Nuxt/Nitro, utilizing direct static JSON imports is more bundler-friendly than using dynamic fs.readFile with process.cwd(). The imported object is bundled and cached in memory, preventing production bugs where process.cwd() doesn't point to original source directories.
**Action:** Always use direct ES module imports for static JSON files in Nuxt/Nitro apps instead of fs.readFile, but remember to use non-mutating methods like .filter() since the imported object is cached across requests.
