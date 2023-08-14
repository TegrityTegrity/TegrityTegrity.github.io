document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('form');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'vanessastover' && password === 'michealchrist') {
      window.location.href = 'dashboard.html';
    } else {
      displayErrorMessage();
    }
  });

  function displayErrorMessage() {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Invalid username or password. Please try again.';

    const loginContainer = document.querySelector('.login-container');
    loginContainer.appendChild(errorMessage);

    setTimeout(function() {
      errorMessage.remove();
    }, 3000);
  }
});
