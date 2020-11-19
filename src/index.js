//alerts
//this :3 is :3 alot :3 

const baseURL = "http://localhost:8080/"
let currentUser
const userAdapter = new UserAdapter(BASEURL)
const corgiAdapter = new CorgiAdapter(BASEURL+'/corgis')
const mainSection = document.getElementById('main')
const adoptionButton = document.getElementById('adoption-button')
let state = {page: 'login' }


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
  
</div>
`)

const loginForm = (`
    <h2 id="login-header">Login</h2>
        
    <br>
        
        <div>
        <form id="login-form">
        <input type="text" name="username" id="login-username-field" class="login-form-field" placeholder="Username">
        <input type="password" name="password" id="login-password-field" class="login-form-field" placeholder="Password">
        
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
        <input type="text" name="username" id="signup-username-field" class="login-form-field" placeholder="Username">
        <input type="password" name="password" id="signup-password-field" class="login-form-field" placeholder="Password">
        
        <input type="submit" value="Sign Up" id="singup-form-submit">
      
        </form>
        <p class="link" ><a id="log-in-link" href="#">Or Log In Here</a></p>
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


function loginOrSignup(e){
    e.preventDefault()
    if (e.target.id === "singup-form-submit"){
        
        let userObj = { user: { 
        username: document.getElementById("signup-username-field").value, 
        password: document.getElementById("signup-password-field").value
        }
        }
        userAdapter.signUpUser(userObj)
    } else if(e.target.id === "login-button-submit"){
        let userObj = { user: {
            username: document.getElementById("login-username-field").value, 
            password: document.getElementById("login-password-field").value
        }
    }
        userAdapter.loginUser(userObj)
    }
    document.querySelector('form').reset()
}

function renderLoginOrSignup(e){
    e.preventDefault()
    if (e.target.id === "log-in-link"){
        state.page = "login"
        pageState()
    } else if (e.target.id === "sign-up-link")
    state.page = "signup"
    pageState()
}

function renderAdoption(){
    mainSection.innerHTML = adopForm
    let adoptButton = document.getElementById('adopt-button')
    adoptButton.addEventListener('click', adopt)
}

function adopt(e){
    e.taget.disabled = true 
    e.preventDefault()
    let name = document.getElementById("corgi-name-input").value
    corgiAdapter.createCorgi(name)
}