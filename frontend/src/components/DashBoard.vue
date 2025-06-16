<template>
  <div class="app-container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="nav-left">
        <h1 class="logo">LonelyNet</h1>
        <div class="dropdowns-container">
          <div class="dropdown" @mouseenter="activeMenu = 'profil'" @mouseleave="activeMenu = null">
            <button class="nav-button">Profilowanie postów</button>
            <transition name="fade">
              <ul v-if="activeMenu === 'profil'" class="dropdown-menu">
                <li>Ankiety</li>
                <li>Jak to działa</li>
              </ul>
            </transition>
          </div>
          <div class="dropdown" @mouseenter="activeMenu = 'choroby'" @mouseleave="activeMenu = null">
            <button class="nav-button">Choroby</button>
            <transition name="fade">
              <ul v-if="activeMenu === 'choroby'" class="dropdown-menu">
                <li>Depresja</li>
                <li>ADHD</li>
              </ul>
            </transition>
          </div>
          <div class="dropdown" @mouseenter="activeMenu = 'pomoc'" @mouseleave="activeMenu = null">
            <button class="nav-button">Pomoc</button>
            <transition name="fade">
              <ul v-if="activeMenu === 'pomoc'" class="dropdown-menu">
                <li>Warszawa</li>
                <li>Kraków</li>
                <li>Białystok</li>
              </ul>
            </transition>
          </div>
        </div>
      </div>


      <div class="auth-buttons" v-if="isLoggedIn === false">
        <button class="auth-btn login" @click="showModal = 'login'">Zaloguj się</button>
        <button class="auth-btn register" @click="showModal = 'register'">Zarejestruj się</button>
      </div>
    </nav>

    <!-- Sekcja z postami -->
    <div class="content-container">
      <ScrollingPosts/>
    </div>

    <!-- Modale -->
    <LoginModal v-if="showModal === 'login'" @close="showModal = null"/>
    <RegisterModal v-if="showModal === 'register'" @close="showModal = null"/>
  </div>
</template>

<script>
import ScrollingPosts from './ScrollingPosts.vue'
import LoginModal from './/modals/LoginModal.vue'
import RegisterModal from './/modals/RegisterModal.vue'

export default {
  components: {
    ScrollingPosts,
    LoginModal,
    RegisterModal
  },
  data() {
    console.log('sadasasd');
    return {
      activeMenu: null,
      showModal: null,
      isLoggedIn: false
    };
  },
  created() {
    const token = localStorage.getItem('authToken')
    console.log(this.isLoggedIn,'logged')
    this.isLoggedIn = !!token

  },
  methods: {
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #121212;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 80px;
  background: #0a0a0a;
  border-bottom: 1px solid #333;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo {
  color: #42b983;
  margin: 0;
}

.dropdowns-container {
  display: flex;
  gap: 15px;
}

.dropdown {
  position: relative;
}

.nav-button {
  background: transparent;
  color: #e0e0e0;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-button:hover {
  color: #42b983;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #1e1e1e;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 10px 0;
  min-width: 200px;
  list-style: none;
  margin-top: 5px;
}

.dropdown-menu li {
  padding: 10px 20px;
  color: #e0e0e0;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background: rgba(66, 185, 131, 0.1);
}

.auth-buttons {
  display: flex;
  gap: 15px;
}

.auth-btn {
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
}

.login {
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: white;
}

.register {
  background: linear-gradient(135deg, #35495e, #2c3e50);
  color: white;
}

.content-container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>