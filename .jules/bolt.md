## 2025-02-18 - Direct JSON Import over fs.readFile in Nuxt Nitro
**Learning:** Nuxt's Nitro server natively supports ES module imports of JSON files, automatically bundling and caching them in memory. Using fs.readFile and process.cwd() is inefficient (reads on every request) and brittle (process.cwd can be incorrect in production). Direct imports are read-only constants, so if mutability is needed (like filtering), assign the imported value to a new mutable variable.
**Action:** Always use direct ES module imports for static JSON files in Nuxt/Nitro backend endpoints instead of fs.readFile.
