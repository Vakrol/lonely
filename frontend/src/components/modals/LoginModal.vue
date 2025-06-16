<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <button class="modal-close" @click="$emit('close')">
        &times;
      </button>

      <div class="modal-header">
        <h2>{{ title }}</h2>
        <div class="modal-divider"></div>
      </div>

      <form @submit.prevent="handleSubmit" class="modal-form">
        <div class="input-group">
          <label>Email</label>
          <input
              v-model="email"
              type="email"
              placeholder="twój@email.com"
              class="modal-input"
          >
        </div>

        <div class="input-group">
          <label>Hasło</label>
          <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="modal-input"
          >
        </div>

        <button type="submit" class="modal-submit-btn">
          {{ submitText }}
        </button>
      </form>

      <div class="modal-footer">
        <p v-if="type === 'login'">
          Nie masz konta? <a @click="$emit('switch')">Zarejestruj się</a>
        </p>
        <p v-else>
          Masz już konto? <a @click="$emit('switch')">Zaloguj się</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    type: {
      type: String,
      default: 'login'
    }
  },
  data() {
    console.log('sadasd')
    return {
      email: '',
      password: ''
    }
  },
  computed: {

    title() {
      console.log('login')
      return this.type === 'login' ? 'Logowanie' : 'Rejestracja'
    },
    submitText() {
      console.log('submit')
      return this.type === 'login' ? 'Zaloguj się' : 'Zarejestruj'
    },

    formValid() {
      console.log('valid', this.email);
      return (
          this.email &&
          this.password
      )}
  },
  methods: {

    async loginUser() {
      try {
        console.log('dziaua');
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
          email: this.email,
          password: this.password
        });
        if(response.data){
          localStorage.setItem("authToken", response.data.token);
        }
        console.log('Logowanie', response.data, localStorage);
        this.$emit('close');
      } catch (error) {
        console.error('CHUJA', error.response?.data || error);
      }
    },

    handleSubmit() {
      if (!this.formValid){
        console.log('no nie valid')
      }
        console.log('handlw');
      if (!this.formValid) return;
      this.loginUser();
    },
  }

}
</script>

<style scoped>
/* PODSTAWOWE STYLE MODALA */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 450px;
  background: #1e1e1e;
  border-radius: 12px;
  border: 1px solid #42b983;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: slideUp 0.4s ease-out;
}

/* NAGŁÓWEK */
.modal-header {
  padding: 25px;
  text-align: center;
}

.modal-header h2 {
  color: #42b983;
  margin: 0;
  font-size: 1.8rem;
  letter-spacing: 1px;
}

.modal-divider {
  height: 2px;
  background: linear-gradient(to right, transparent, #42b983, transparent);
  margin: 15px 0;
}

/* FORMULARZ */
.modal-form {
  padding: 0 30px 30px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  color: #a0a0a0;
  margin-bottom: 8px;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.modal-input {
  width: 100%;
  padding: 14px 16px;
  background: #252525;
  border: 1px solid #333;
  border-radius: 8px;
  color: #f0f0f0;
  font-size: 1rem;
  transition: all 0.3s;
}

.modal-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.3);
}

/* PRZYCISKI */
.modal-submit-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.modal-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.4);
}

/* STOPKA */
.modal-footer {
  padding: 20px;
  text-align: center;
  border-top: 1px solid #333;
}

.modal-footer p {
  color: #888;
  margin: 0;
}

.modal-footer a {
  color: #42b983;
  cursor: pointer;
  text-decoration: none;
}

.modal-footer a:hover {
  text-decoration: underline;
}

/* PRZYCISK ZAMYKANIA */
.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 1;
}

.modal-close:hover {
  color: #42b983;
}

/* ANIMACJE */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>