import { ref } from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const messageColor = ref('green')

const register = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    })

    if (!response.ok) {
      console.log('sadasd')
      const data = await response.json()
      const errorKey = Object.keys(data)[0]
      message.value = `${errorKey}: ${data[errorKey]}`
      messageColor.value = 'red'
    } else {
      message.value = 'Użytkownik zarejestrowany!'
      messageColor.value = 'green'
      username.value = ''
      email.value = ''
      password.value = ''
    }
  } catch (err) {
    message.value = 'Błąd połączenia z serwerem.'
    messageColor.value = 'red'
  }
}