export async function loginUser(username, password) {
  const response = await fetch('http://localhost:8000/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCSRFToken()
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  });

  return await response.json();
}

// Pomocniczo, jeśli masz w szablonie CSRF token
function getCSRFToken() {
  const name = 'csrftoken';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
