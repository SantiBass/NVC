async function loginFormHandler(event) {
    console.log('this work');
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
          
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
       
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  console.log('it works loggin form')
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  
  
  