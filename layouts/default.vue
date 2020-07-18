<template>
  <div id="app">
    <div>
      <Navbar />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue"

export default {
  components: {
    Navbar
  }
}
</script>

<style>
:root {
  --primary-swatch: #4b7a47;
  --background-color: #f6f6f6;
  --border-grey: #Dfe1e5;
  --text-grey: #4d5156;
  --text-black: #422222;
  --size-0: 11px;
  --size-1: 12.5px;
  --size-2: 14px;
  --size-3: 16px;
  --size-4: 18px;
  --size-5: 20px;
  --space-0: 0.5rem; /* 8px  */
  --space-1: 1.0rem; /* 16px */
  --space-2: 1.5rem; /* 24px */
  --space-3: 2.0rem; /* 32px */
  --space-4: 2.5rem; /* 40px */
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-black);
}

.page {
  display: grid;
  grid-row-gap: 50px;
  grid-template-columns: 10% auto 10%;
}

.page-wrapper {
  grid-column-start: 2;
  grid-column-end: 3;
  margin-bottom: var(--space-4);
}

a, .link {
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: var(--primary-swatch);
}

a:hover, link:hover {
  text-decoration: underline;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.sef-btn {
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 3px;
  background: var(--primary-swatch);
  padding: var(--space-0) var(--space-1);
}

button {
  cursor: pointer;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

/* body */

html {
  scrollbar-width: none;
}

body {
  margin: 0;
  background-size: 300px;
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MDAnIGhlaWdodD0nNDAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+CjxkZWZzPgoJPHBhdHRlcm4gaWQ9J2JsdWVzdHJpcGUnIHBhdHRlcm5Vbml0cz0ndXNlclNwYWNlT25Vc2UnIHg9JzAnIHk9JzAnIHdpZHRoPSc4JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgNSAxMCcgPgoJCTxyZWN0IHg9Jy01JyB5PSctNScgd2lkdGg9JzE1JyBoZWlnaHQ9JzIwJyBmaWxsPScjRUZGN0YxJy8+CgkJPGxpbmUgeDE9Jy0yJyB5MT0nMScgeDI9JzcnIHkyPScxMCcgc3Ryb2tlPScjZmFmYWZhJyBzdHJva2Utd2lkdGg9JzInLz4KCQk8bGluZSB4MT0nLTInIHkxPSc2JyB4Mj0nNycgeTI9JzE1JyBzdHJva2U9JyNmYWZhZmEnIHN0cm9rZS13aWR0aD0nMicvPgoJCTxsaW5lIHgxPSctMicgeTE9Jy00JyB4Mj0nNycgeTI9JzUnIHN0cm9rZT0nI2ZhZmFmYScgc3Ryb2tlLXdpZHRoPScyJy8+CgkJPGxpbmUgeDE9JzcnIHkxPScxJyB4Mj0nLTInIHkyPScxMCcgc3Ryb2tlPScjZjVmNWY1JyBzdHJva2Utd2lkdGg9JzInLz4KCQk8bGluZSB4MT0nNycgeTE9JzYnIHgyPSctMicgeTI9JzE1JyBzdHJva2U9JyNmNWY1ZjUnIHN0cm9rZS13aWR0aD0nMicvPgoJCTxsaW5lIHgxPSc3JyB5MT0nLTQnIHgyPSctMicgeTI9JzUnIHN0cm9rZT0nI2Y1ZjVmNScgc3Ryb2tlLXdpZHRoPScyJy8+Cgk8L3BhdHRlcm4+IAoJPGZpbHRlciBpZD0nZnV6eicgeD0nMCcgeT0nMCc+CgkJPGZlVHVyYnVsZW5jZSB0eXBlPSd0dXJidWxlbmNlJyByZXN1bHQ9J3QnIGJhc2VGcmVxdWVuY3k9Jy4yIC4xJyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+CgkJPGZlQ29sb3JNYXRyaXggdHlwZT0nc2F0dXJhdGUnIGluPSd0JyB2YWx1ZXM9JzAuNCcvPgoJCTxmZUNvbnZvbHZlTWF0cml4IG9yZGVyPSczLDMnIGtlcm5lbE1hdHJpeD0nMCwtLjI1LDAsLS4yNSwyLC0uMjUsMCwtLjI1LDAnLz4KCTwvZmlsdGVyPgo8L2RlZnM+CjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J3VybCgjYmx1ZXN0cmlwZSknLz4KPHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsdGVyPSd1cmwoI2Z1enopJyBvcGFjaXR5PScwLjA2Jy8+Cjwvc3ZnPg==");
}
</style>
