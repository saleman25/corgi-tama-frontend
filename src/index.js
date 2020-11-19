
const baseURL = "http://localhost:8080/"
let currentUser
// const userAdapter = new UserAdapter(baseURL)
// const corgiAdapter = new CorgiAdapter(baseURL)
const mainSection = document.getElementById('main')
const adoptButton = document.getElementById('adopt-button')
const newPlayerbutton = document.getElementById("newplayer")
newPlayerbutton.addEventListener('click', newPlayer)



const adoptForm = (`
    <h2 id="adopt-header">Adopt Me!</h2>
    
    <div id="adopt-div">
    <form id="adopt-form">
    <input type="text" name="name" id="corgi-name-input" placeholder="Name Me!">
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




const newPlayerForm = (`
        <h2 id="new-player">Enter Your Name</h2>
        
        <div>
        
        <form id="new-player-form">
        <input type="text" name="name" id="new-player-name-field" class="new-player-field" placeholder="Your Name Here">
        <input type="submit" value="Lets Find You a Puppy!" id="new-player-submit">
        </form>
      
        </div>
    `);



function newPlayer(){
    mainSection.innerHTML += newPlayerForm
    hideNewPlayerDiv()
}


function hideNewPlayerDiv(){
    document.querySelector("#newplayerdivy").style.display = "none"
}

function loginNewPlayer(e){
        e.preventDefault()
        
        e.target.id === "new-player-submit" 
        { let userObj = { user: {
                name: document.getElementById("new-player-name-field").value,
            }
        }
            userAdapter.loginPlayer(userObj)
        }
        adopt()
    }


function adopt(){
    const newPlayerSubmit = document.getElementById("new-player-submit")
    newPlayerSubmit.addEventListener("click", () =>
    console.log("plsfuckingstop"),
    mainSection.innerHTML += adoptForm)
    hideAdopt()
}

function hideAdopt(){
    document.querySelector("#adopt-div").style.display = "none"
}

function renderAdopt(){
    adoptButton.addEventListener('click', adoptA)
}

function adoptA(e){
    e.taget.disabled = true 
    e.preventDefault()
    let name = document.getElementById("corgi-name-input").value
    corgiAdapter.createCorgi(name)
}