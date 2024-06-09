import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css' //Import the main.css path that was created
import './stores/movie.js'
import './components/MovieDetails.vue'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
