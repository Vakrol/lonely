import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // poprawnie wskazuje na ./router/index.js
import './components/DashBoard.css';

createApp(App).use(router).mount('#app')

