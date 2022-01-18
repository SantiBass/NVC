async function signupFormHandler(event) {
  console.log("this works")
    event.preventDefault();
  
    const username = document.querySelector('#user-name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log("it's working")
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
        console.console.log("It did't work!");
      }
    }
  }
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);