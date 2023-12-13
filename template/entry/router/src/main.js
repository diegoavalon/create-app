import './assets/main.css'
import './styles/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Supports weights 300-800
import '@fontsource-variable/open-sans'
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-600.css'
import '@fontsource/poppins/latin-700.css'

import { setGlobalTokens } from '@medicare-tools/styles/src/tokens/'

setGlobalTokens()

const app = createApp(App)

app.use(router)

app.mount('#app')
