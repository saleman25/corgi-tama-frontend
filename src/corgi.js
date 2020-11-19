class Corgi {
    static all = []
    constructor({name, id, hunger_meter, lonliness_meter, happiness_meter, evolution_countdown, corgi_type}){
        this.name = name;
        this.id = id;
        this.hunger_meter = hunger_meter;
        this.lonliness_meter = lonliness_meter;
        this.happiness_meter = happiness_meter;
        this.evolution_countdown = evolution_countdown;
        this.corgi_type = corgi_type;
        this.gif = `./animations/corgi.gif`

        Corgi.all.push(this)

}

// render corgi
//gif
//progressbars
//buttons
//gametimer
//pls someonesaysike
// how it grows up

//as soon as the adopt form is submitted all of this should pop up


setGif() {
    return this.gif = `./animations/corgi.gif`
}

renderProgressBarsInnerHTML(){
    return `
        <h1><strong>${this.name}</strong></h1>
        <label for="hunger">Hunger</label>
        <progress id="${this.id}-hunger" class="progress is-small is-success" value="${this.hungerMeter}" max="100">${this.hungerMeter}%</progress>
        <label for="lonlieness">Lonlieness</label>
        <progress id="${this.id}-lonlieness" class="progress is-small is-success" value="${this.lonlinessMeter}" max="100">${this.lonlienessMeter}%</progress>
        <label for="happiness">Happiness</label>
        <progress id="${this.id}-happiness" class="progress is-small is-success" value="${this.happinessMeter}" max="100">${this.happinessMeter}%</progress>
        `
}

renderCorgi(){

let corgiDiv = document.createElement('div')
this.div = corgiDiv
corgiDiv.className =  "corgi-div"
corgiDiv.dataset.id = `${this.id}`


// this is my default gif
let babypup = document.createElement('img')
this.babypup = babypup
babypup.src = this.setGif()

corgiDiv.appendChild(babypup)

let progressBarsContainer = document.createElement('div')
progressBarsContainer.className = "progress-bars has-text-centered"
progressBarsContainer.id = `${this.id}-progress-bars`


this.progressBarsContainer = progressBarsContainer
progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()


let buttonsArea = document.createElement('div')
buttonsArea.className = "buttons-area"

// meal button to feed || hunger meter
let mealButton = document.createElement('img')
this.mealButton = mealButton
mealButton.src = "./images/heart-button.jpg"
buttonsArea.appendChild(mealButton)

// pet button to pet || lonlieness meter
let petButton = document.createElement('img')
this.petButton = petButton
petButton.src = "./images/heart-button-2.jpg"
buttonsArea.appendChild(petButton)

// play button to play || happiness meter
let playButton = document.createElement('img')
this.playButton = playButton
playButton.src = "./images/heart-button-1.jpg"
buttonsArea.appendChild(playButton)

// add progressbars n buttons
corgiDiv.append(progressBarsContainer, buttonsArea)

//add individual corgi div to main div
corgiContainer.appendChild(corgiDiv)

this.startGame()

}

// starts game i need to see how to set up the timer
startGame() {
    this.timer = window.setInterval()
}

// this is incharge of my progress bars 
gameHandler(){
 //decrease the hunger and happiness meters, but not below 0
 this.hungerMeter = this.valueLimit(this.hungerMeter - 1)
 this.happinessMeter = this.valueLimit(this.happinessMeter -1 )
 //update the progress bars
 this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()  
 

 // if the points are below -100 have the corgi run away???
 if (this.totalPoints < -100){
     this.removeDiv()
     //stop the game timer from ticking
     clearInterval(this.timer)
     corgiAdapter.deleteCorgi(this.id)
    //  make a function that shows an alert when corgi has ran
     showDangerAlert(`${this.name} ran away!!!`)
}
}


// evole or retire the corgi??? depending on what i decide to do

// remove the div so that the player knows the game ended

// goodbye and add an option to play again 

// makecorgiobj remake the corgi object in snakecase for the backend so rails can read it

// tally the points osea lo k pasa cada vez k punchas un buton 
// y como it interacts w the other progress bars osea if u click this how does it afffect the other bars
// how many points go up n how much goes down 
}