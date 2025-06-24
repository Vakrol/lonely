<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <button class="modal-close" @click="$emit('close')">
        &times;
      </button>

      <div class="modal-header">
        <h2>Rejestracja</h2>
        <div class="modal-divider"></div>
      </div>

      <form @submit.prevent="handleSubmit" class="modal-form">
        <div class="input-group">
          <label>Nazwa użytkownika</label>
          <input
            v-model="username"
            type="text"
            placeholder="Twój pseudonim"
            class="modal-input"
          >
          <div v-if="errorMessages && errorMessages.username" class="error">
            {{ errorMessages.username[0] }}
          </div>
        </div>

        <div class="input-group">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="twój@email.com"
            class="modal-input"
          >
          <div v-if="errorMessages && errorMessages.email" class="error">
            {{ errorMessages.email[0] }}
          </div>
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

        <div class="input-group">
          <label>Powtórz hasło</label>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="••••••••"
            class="modal-input"
          >
        </div>

        <div class="input-group terms">
          <input
            id="terms"
            v-model="acceptedTerms"
            type="checkbox"
            class="modal-checkbox"
          >
          <label for="terms">Akceptuję regulamin</label>
        </div>

        <button
          type="submit"
          class="modal-submit-btn"
          :disabled="!formValid"
        >
          Zarejestruj się
        </button>
        <div v-if="errorMessages && errorMessages.general" class="error">
          {{ errorMessages.general[0] }}
        </div>
      </form>

      <div class="modal-footer">
        <p>Masz już konto? <a @click="$emit('switch')">Zaloguj się</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: false,
      errorMesseges: {}
    }
  },
  computed: {
    formValid() {
      console.log('valid');
      console.log(this.username,'USER')
      return (
        this.username &&
        this.email &&
        this.password &&
        this.password === this.confirmPassword &&
        this.acceptedTerms
      )
    },
  },
  methods: {
    async registerUser() {
      console.log(this.username,'ser')
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register/', {
          username: this.username,
          email: this.email,
          password: this.password
        });
        console.log('Rejestracja', response.data);
        this.$emit('close');
      } catch (error) {
        if(error.response && error.response.data) {
          this.errorMesseges = error.response.data;
        } else {
          this.errorMesseges = { general: ['Ups! Coś poszło nie tak']};
        }
        console.log(this.errorMesseges,'errors', this.errorMesseges.error)
      }
    },

    handleSubmit() {
      console.log('click')
      if (!this.formValid) return;
      this.registerUser();
    },
  },
}
    // handleSubmit() {
    //   if (!this.formValid) return
    //
    //   this.$emit('submit', {
    //     username: this.username,
    //     email: this.email,
    //     password: this.password
    //   })
    // }


</script>

<style scoped>
/* WSPÓLNE STYLE (identyczne jak w LoginModal) */
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

.error {
  color: #ff4d4f;
  font-size: 0.9rem;
  margin-top: 5px;
}

.modal-submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.4);
}

.modal-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #555;
}

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

/* DODATKOWE STYLE SPECJALNIE DLA REGISTERMODAL */
.terms {
  display: flex;
  align-items: center;
  margin: 25px 0;
}

.modal-checkbox {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  accent-color: #42b983;
  cursor: pointer;
}

.terms label {
  margin: 0;
  cursor: pointer;
  color: #ddd;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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