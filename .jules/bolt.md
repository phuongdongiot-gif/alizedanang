## 2026-04-16 - Prevent Waterfall API calls using Promise.all in Nuxt
**Learning:** Found sequential `await useFetch(...)` calls in Nuxt Vue components which block each other and cause a waterfall request pattern. Using `Promise.all` allows fetching them concurrently. Destructuring the result correctly maps data/pending states without modifying the template.
**Action:** When inspecting Vue components fetching multiple API resources, always check if they are independent and rewrite them using `Promise.all` to reduce total loading time from sum to max.
