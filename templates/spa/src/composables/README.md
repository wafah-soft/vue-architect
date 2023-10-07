# Composables

This directory contains reusable logic encapsulated within composables for our Vue application.

## Structure

For smaller projects, composables can be placed directly inside this directory. However, as the project grows and the number of composables increases, it's advisable to adopt a more structured approach. Here's a recommended structure for larger projects:

```
composables/
|-- api/             # For composables related to API calls and data fetching
|   |-- useApi.js
|   |-- useUserApi.js
|   |-- useProductApi.js
|-- ui/              # For composables handling UI interactions
|   |-- useModal.js
|   |-- useToast.js
|-- state/           # Composables that manage local states
|   |-- useUserData.js
|   |-- useCartData.js
|-- events/          # Composables dealing with browser or document events
|   |-- useWindowWidth.js
|   |-- useDocumentScroll.js
|-- index.js         # Central export for all composables
```

## Guidelines

1. **Naming Convention**: Composables should be prefixed with 'use' to clearly distinguish them and follow the convention set by the Vue Composition API.

2. **Single Responsibility**: Each composable should have a single responsibility. If a composable gets too large or handles multiple unrelated tasks, consider breaking it up.

3. **Documentation**: If the logic within a composable is complex or not self-explanatory, add comments or consider adding a dedicated markdown file explaining its usage.

Remember to adapt the structure and guidelines based on the project's needs and the team's preferences.