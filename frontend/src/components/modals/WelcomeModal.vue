<template>
  <div class="modal-overlay" v-if="visible" @click.self="close">
    <div class="modal-container">
      <button class="modal-close" @click="close">&times;</button>
      <h2>Witaj na Lonely!</h2>
      <p>
        To miejsce, gdzie możesz dzielić się swoimi myślami, problemami i marzeniami z innymi.
        Twórz profil, dołączaj do czatów i znajduj osoby z podobnymi doświadczeniami.
      </p>
      <p>
        Twoje dane są prywatne, dopóki sam nie zdecydujesz ich udostępnić.
      </p>
      <button class="modal-submit-btn" @click="close">Rozumiem</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeModal',
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    const alreadySeen = localStorage.getItem('welcome_shown')
    if (!alreadySeen) {
      this.visible = true
      localStorage.setItem('welcome_shown', 'true')
    }
  },
  methods: {
    close() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex; justify-content: center; align-items: center;
  z-index: 9999;
}

.modal-container {
  background: #1e1e1e;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  color: #fff;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 15px; right: 20px;
  background: none;
  border: none;
  color: #aaa;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-close:hover {
  color: #42b983;
}

.modal-submit-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background: #42b983;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
