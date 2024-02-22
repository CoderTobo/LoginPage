const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();

  // Validate email and password
  if (email === '' || password === '') {
    alert('Please enter your email and password.');
    return;
  }

  
});