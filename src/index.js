//adopt form
//login form
//signup form
//alerts
//this :3 is :3 alot :3 

const baseURL = "http://localhost:8080/"
const mainSection = document.getElementById('main')
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
let state = {page: 'login' }

loginButton.addEventListener("click", (e) => {
   e.preventDefault();
    const username = loginForm.username.value 
    const password = loginForm.password.value 

    if (username === "" && password === "") {
        // blah blah blah 
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})

// yr gonna have to prob make a const for loging and signup so u can render it depending on what is chosen
// render the page depending on what it chose
    // so login signup 
// u need to do a signuup and login preventdefaults and keep logged in and 
// then form so u can adopt a corgi