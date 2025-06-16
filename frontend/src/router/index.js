import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../components/DashBoard.vue'
import UserRegister from '../components/modals/RegisterModal.vue'
import LoginModal from '../components/modals/LoginModal.vue'

const routes = [
  { path: '/', component: DashBoard },
  { path: '/register', component: UserRegister },
  { path: '/login', component: LoginModal},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
