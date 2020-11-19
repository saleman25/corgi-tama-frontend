
const baseURL = "http://localhost:8080/"
let currentUser
// const userAdapter = new UserAdapter(BASEURL)
// const corgiAdapter = new CorgiAdapter(BASEURL+'/corgis')
const mainSection = document.getElementById('main')
const adoptionButton = document.getElementById('adoption-button')
const loginLinky = document.getElementById("log-in-link")
loginLinky.addEventListener('click', login)
const signupLinky = document.getElementById("sign-up-link")
signupLinky.addEventListener('click', signup)



const adoptForm = (`
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
`);




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
    `);


 
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
`);


function login(){
    mainSection.innerHTML += loginForm
    hideElements()

}

function signup(){
    mainSection.innerHTML += signupForm
    hideElements()
}

function hideElements(){
    document.querySelector("#signupdivy").style.display = "none"
    document.querySelector("#logindivy").style.display = "none"
}


function renderAdoption(){
    mainSection.innerHTML = adoptForm
    let adoptButton = document.getElementById('adopt-button')
    adoptButton.addEventListener('click', adopt)
}

function adopt(e){
    e.taget.disabled = true 
    e.preventDefault()
    let name = document.getElementById("corgi-name-input").value
    corgiAdapter.createCorgi(name)
}