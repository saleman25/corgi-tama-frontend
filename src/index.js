//adopt form
//login form
//signup form
//alerts
//this :3 is :3 alot :3 

const url = "http://localhost:8080/"
const mainSection = document.getElementById('main')
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
   e.preventDefault();
    const username = loginForm.username.value 
    const password = loginForm.password.value 

    if (username === "" && password === "") {
        // blah blah blah 
    } else {
        // error
    }

})

