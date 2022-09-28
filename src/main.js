import { createApp } from 'vue'
import App from './App.vue'
import setupApp from '~'

const app = createApp(App)
setupApp(app)
app.mount('#app')
