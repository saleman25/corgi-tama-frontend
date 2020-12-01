
const baseURL = "http://localhost:3000/"
let currentUser
const userAdapter = new UserAdapter(baseURL)
const corgiAdapter = new CorgiAdapter(baseURL)
const mainSection = document.getElementById('main')

const newPlayerbutton = document.getElementById("newplayer")
newPlayerbutton.addEventListener('click', newPlayer)

let noteDiv = document.getElementById('note-container')

const adoptForm = (`
    
<div id="adopt-div">
       
<h2 id="adopt-header">Adopt Me!</h2>
    
<form id="adopt-form">
<input type="text" name="name" id="corgi-name-input" class="corgi-name-field" placeholder="Name Me!">
<input type="submit" value="♡ Adopt Me ♡" id="adopt-submit">
</form>
  
</div>
`);


const newPlayerForm = (`
    
<div id="newplayerformdivy">
       
<h2 id="new-player">Enter Your Name</h2>
        
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
    const adoptButton = document.getElementById('adopt-submit')
    adoptButton.addEventListener('click', adoptA)
    hideNameDiv()
}

// this should be hiding the name section so that u can see the adopt form
function hideNameDiv(){
    document.querySelector("#newplayerformdivy").style.display = "none"
}


// this saves the corgi instance
function adoptA(e){
    e.preventDefault()  
    let name = {name: e.target.previousElementSibling.value}
    corgiAdapter.createCorgi(name)
    hideAdopt()
}

// this is going to hide the adoptform so that game can start
function hideAdopt(){
    document.querySelector("#adopt-div").style.display = "none"
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
    let noteDiv = document.getElementById('note-container')
    
    let note = `
    <div class="callout">
        <span class="callout-closebtn">&times;</span>
        <div class="callout-container">
            <img src="./animations/corgigoingoff.gif">
            <p>${message}</p>
        </div>
    </div>
    `
    noteDiv.innerHTML += note
    noteDiv.hidden = false
    noteDiv.addEventListener('click', removeNote)

}

function allCorgis(){
    const allCorigs = Corgi.all
    const corgis = allCorigs.slice(0,5)
    mainSection.innerHTML += corgis[0].name  
}

const corgiButton = '<button class="corgs"> See your corgis </button>'

function addingButton(){
    mainSection.innerHTML += corgiButton
    const corgsButton = document.querySelector(".corgs")
    console.log(corgsButton)
    corgsButton.addEventListener('click', allCorgis)
    
    hideNoteDiv()
}

function hideNoteDiv(){
    document.querySelector('#note-container').style.display  = 'none'
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
    addingButton()
}

function close(e){
    e.target.parentElement.hidden = true
}

// a button that shows all the previous corgis 
// after i close the goodbye message 
// button will appear when u click the button itll show previous corgis 


