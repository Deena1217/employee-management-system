import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/tailwind.css'

// Set the base URL for axios globally
axios.defaults.baseURL = 'http://localhost:5125/api'

const app = createApp(App)

// Optionally, make axios available globally in components as $axios
app.config.globalProperties.$axios = axios

app.mount('#app')
