
const baseURL = "http://localhost:3000/"
let currentUser
const userAdapter = new UserAdapter(baseURL)
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
        
        <div id="newplayerformdivy">
        
        <form id="new-player-form">
        <input type="text" name="name" id="new-player-name-field" class="new-player-field" placeholder="Your Name Here">
        <input type="submit" value="Lets Find You a Puppy!" id="new-player-submit">
        </form>
      
        </div>
    `);


// you are at the page u click the button lets play
function newPlayer(){
    mainSection.innerHTML += newPlayerForm
    const newPlayerSubmit = document.getElementById("new-player-submit")
    newPlayerSubmit.addEventListener("click", loginNewPlayer)
    hideNewPlayerDiv()
}

// you hide the buttonthat says lets play so u can enter yr name
function hideNewPlayerDiv(){
    document.querySelector("#newplayerdivy").style.display = "none"
}

// you enter your name and it gets saved 
function loginNewPlayer(e){
        e.preventDefault()
        let userObj = { 
            user: e.target.previousElementSibling.value
            }
            userAdapter.loginPlayer(userObj)
        adopt()
    }

// after you save the name adopt form pops up 
function adopt(){
    mainSection.innerHTML += adoptForm
    hideNameDiv()
}

// this should be hiding the name section so that u can see the adopt form
function hideNameDiv(){
    document.querySelector("#newplayerformdivy").style.display = "none"
}

// this listens for when u actually cick the adopt button
function renderAdopt(){
    adoptButton.addEventListener('click', adoptA)
}

// this saves the corgi instance
function adoptA(e){
    e.taget.disabled = true 
    e.preventDefault()
    let name = document.getElementById("corgi-name-input").value
    corgiAdapter.createCorgi(name)
}


// this is for when corgi runs away bc not getting enough attention
function showDangerAlert(message){

    let alertDiv = document.createElement('div')
    alertDiv.className = "alert-danger"
    alertDiv.innerText = `${message}`

    document.getElementById('alert-container').appendChild(alertDiv)

    let closeButton = document.createElement('span')
    closeButton.className = "closebtn"
    closeButton.innerHTML = `&times;`
    alertDiv.appendChild(closeButton)

    //alert goes away on it's own after 3 seconds
    window.setTimeout(() => {
        closeButton.parentElement.hidden = true
    }, 3000)

    //alert disappears when they click the closeButton
    closeButton.addEventListener('click', close)
}


// note for the goodbye
function createNote(message){

    let note = `
    <div class="callout">
        <span class="callout-closebtn">&times;</span>
        <div class="callout-container">
            <p>${message}</p>
        </div>
    </div>
    `
    noteDiv.innerHTML += note
    noteDiv.hidden = false
    noteDiv.addEventListener('click', removeNote)

}

// removes the goodbye
function removeNote(e){
    if (e.target.className === "callout-closebtn"){
        e.target.parentElement.remove()
        // only hide the noteDiv if it is empty
        if (noteDiv.childElementCount === 0){
            noteDiv.hidden = true
        }
    }
}

function close(e){
    e.target.parentElement.hidden = true
}