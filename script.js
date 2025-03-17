  // DOM Elements
  const loginButton = document.getElementById('loginButton');
  const signinButton = document.getElementById('signinButton');
  const loginForm = document.getElementById('loginForm');
  const signinForm = document.getElementById('signinForm');
  const actionText = document.getElementById('actionText');
  
  // Event Listeners
  loginButton.addEventListener('click', showLoginForm);
  signinButton.addEventListener('click', showSigninForm);
  
  // Functions
  function showLoginForm() {
      // Update buttons
      loginButton.classList.add('active');
      signinButton.classList.remove('active');
      
      // Update forms
      loginForm.classList.add('active');
      signinForm.classList.remove('active');
      
      // Update text
      actionText.textContent = 'log in';
  }
  
  function showSigninForm() {
      // Update buttons
      signinButton.classList.add('active');
      loginButton.classList.remove('active');
      
      // Update forms
      signinForm.classList.add('active');
      loginForm.classList.remove('active');
      
      // Update text
      actionText.textContent = 'sign in';
  }
  
  // Form submission (prevent default behavior)
  document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          // Here you would typically handle form submission
          console.log('Form submitted:', this.id);
      });
  });