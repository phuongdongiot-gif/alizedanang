
## 2024-11-07 - Refactoring server endpoints to bypass slow File I/O operations
**Learning:** Nuxt server API endpoints directly reading local JSON file data via `fs.readFile` adds inefficient synchronous bottlenecks, and reading static files inside built Nuxt/Nitro production builds requires additional config as they aren't bundled automatically.
**Action:** Always refactor endpoints in Nuxt/Nitro architectures to import static JSON arrays directly as ES modules. These acts as read-only constants, eliminating file I/O bottlenecks and ensuring data is correctly bundled into `.output/server`. If mutable arrays are needed (e.g. to `.filter()`), copy them to let variables (`let items: any[] = importedData`). Use Node `with { type: 'json' }` imports in standalone scripts.
