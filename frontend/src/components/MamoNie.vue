<template>
  <div id="app">
    <div class="message-container">
      <div class="hearts-wrapper">
        <span class="heart left-heart">&#x2764;&#xfe0f;</span> </div>
      <h1 class="glowing-text">MAMO PROSZĘ NIE GNIEWAJ SIĘ NA MNIE</h1>
      <div class="hearts-wrapper">
        <span class="heart right-heart">&#x2764;&#xfe0f;</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      re_password: '',
    }
  },
  methods: {
    async register() {
      try {
        await axios.post('http://localhost:8000/api/auth/users/', {
          username: this.username,
          email: this.email,
          password: this.password,
          re_password: this.re_password,
        })
        alert('Zarejestrowano!')
      } catch (err) {
        alert('Błąd rejestracji')
        console.log(err.response.data)
      }
    },
  },
}
</script>

<style>
/* Globalne style */
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a; /* Ciemne tło */
  overflow: hidden; /* Zapobiega scrollowaniu, jeśli serca wyjdą poza ekran */
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Bardziej "przyjacielska" czcionka */
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.message-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Ważne dla pozycjonowania serc */
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3); /* Lekko przezroczyste tło dla czytelności */
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.5); /* Lekka czerwona poświata */
}

.glowing-text {
  font-size: 4em; /* Duży napis */
  font-weight: bold;
  text-align: center;
  padding: 0 20px; /* Odstęp od serc */
  /* Animacja kolorów */
  animation: glow 5s infinite alternate;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Kolor tekstu przezroczysty, aby gradient był widoczny */
  background-image: linear-gradient(to right, #ff0000, #ff8c00, #ffff00, #00ff00, #0000ff, #4b0082, #ee82ee); /* Tęczowy gradient */
  background-size: 200% auto; /* Pozwala na animację gradientu */
}

/* Animacja mienienia się kolorami */
@keyframes glow {
  0% { background-position: 0% 50%; filter: brightness(1); text-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
  50% { background-position: 100% 50%; filter: brightness(1.5); text-shadow: 0 0 20px rgba(255, 255, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.6); }
  100% { background-position: 0% 50%; filter: brightness(1); text-shadow: 0 0 5px rgba(0, 0, 255, 0.5); }
}

.hearts-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0 10px;
}

.heart {
  font-size: 3em; /* Rozmiar serca */
  color: red; /* Kolor serca */
  position: absolute; /* Pozycjonowanie absolutne dla animacji */
  animation: pulse 1.5s infinite alternate, float-and-rotate 7s infinite linear; /* Animacja pulsowania i pływania */
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.7); /* Poświata dla serca */
}

.left-heart {
  left: -50px; /* Pozycja od lewej */
  top: 50%;
  transform: translateY(-50%);
  animation-delay: 0s, 0.5s; /* Opóźnienie animacji dla różnorodności */
}

.right-heart {
  right: -50px; /* Pozycja od prawej */
  top: 50%;
  transform: translateY(-50%);
  animation-delay: 0.5s, 0s; /* Opóźnienie animacji dla różnorodności */
}

/* Animacja pulsowania serca */
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.2); opacity: 0.8; }
}

/* Animacja pływania i obracania serc */
@keyframes float-and-rotate {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.8;
  }
  25% {
    transform: translate(10px, -10px) rotate(5deg);
    opacity: 0.9;
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 1;
  }
  75% {
    transform: translate(-10px, 10px) rotate(-5deg);
    opacity: 0.9;
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.8;
  }
}

/* Dodatkowe serca (opcjonalnie, można dodać więcej, kopiując te bloki) */
/* Możesz dodać więcej serc z różnymi pozycjami i opóźnieniami, aby uzyskać efekt "deszczu serc" */
.heart:nth-child(2) {
  font-size: 2em;
  color: #ff4d4d;
  left: 20%;
  top: 10%;
  animation-delay: 0.3s, 1s;
}

.heart:nth-child(3) {
  font-size: 2.5em;
  color: #ff9999;
  right: 15%;
  bottom: 5%;
  animation-delay: 0.8s, 2s;
}

/* Dla większej kontroli i różnorodności serc, można użyć JavaScript do ich generowania
   lub dodać więcej statycznych elementów `span` w HTML i stylować je indywidualnie.
   Powyższe `left-heart` i `right-heart` są pozycjonowane względem `message-container`.
   Jeśli chcesz serca latające po całym ekranie, umieść je poza `message-container`
   i pozycjonuj względem `body` lub `#app`.
*/
</style>