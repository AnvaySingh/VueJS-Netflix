# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

1. Scaffolding a Vite + Vue project

```npm create vite@latest VueJS-Netflix -- --template vue```

2. Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```npm install -D tailwindcss postcss autoprefixer```
```npx tailwindcss init -p```

3. Add the paths to all of your template files in your tailwind.config.js file.

  ```content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],```

4. Now add tailwind directive to your css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Include the npm package

``` npm i vue-material-design-icons vue3-carousel```

6. Install pinia
```npm install pinia```

7. Include pinia instance and pass it as plugin in main.js

```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css' //Import the main.css path that was created
import './stores/movie.js'
import App from './App.vue'

const pinia = createPinia() //Include pinia instance
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```