//adopt form
//login form
//signup form
//alerts
//this :3 is :3 alot :3 

const baseURL = "http://localhost:8080/"
const mainSection = document.getElementById('main')
// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");
const adoptionButton = document.getElementById('adoption-button')
let state = {page: 'login' }

// loginButton.addEventListener("click", (e) => {
//    e.preventDefault();
//     const username = loginForm.username.value 
//     const password = loginForm.password.value 

//     if (username === "" && password === "") {
//         // blah blah blah 
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }

// })

const adopForm = (`
<h2 id="adopt-header">Adopt Me!</h2>
        
<br>
    
    <div>
    <form id="login-form">
    <input type="text" name="name" id="corgi-name-input placeholder="Name Me!">
    <div class="field submit">
    <p class="control" id="adopt-button-area">
    <button id="adopt-button">
    ♡ Adopt Me ♡ 
    </button>
    </p>
    </div>
  
    </form>
  
    <p class="link"><a id="sign-up-link" href="#">Need to Sign Up?</a></p>
</div>
`)

const loginForm = (`
    <h2 id="login-header">Login</h2>
        
    <br>
        
        <div>
        <form id="login-form">
        <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
        <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
        
        <input type="submit" value="Login" id="login-form-submit">
      
        </form>
      
        <p class="link"><a id="sign-up-link" href="#">Need to Sign Up?</a></p>
    </div>
    `
)

const signupForm = (`
<h2 id="signup-header">Sign Up</h2>
        
    <br>
        
        <div>
        <form id="signup-form">
        <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
        <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
        
        <input type="submit" value="Sign Up" id="login-form-submit">
      
        </form>
      
    </div>
`)

function pageState(){
    let adoptionButtonDiv = document.getElementById('adoption-button-container')
    adoptionButtonDiv.hidden = true 

    switch(state.page){
        case('login'):
        mainSection.innerHTML = loginForm 
        break;
        case('signup'):
        mainSection.innerHTML = signupForm 
        break;
    }
}

let submit = document.querySelector(".submit")
let linkArea = document.querySelector(".link")
linkArea.addEventListener('click', renderLoginOrSignup)
submit.addEventListener('click', loginOrSignup)

function loginOrSignup(e)