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

//create element for spite img
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


// // add the stupid buttons for the game

// }

// startGame() {
//     // set up a timer for the game to begin
// }

// set up the game stats for each of the progress bars
// like how much the bars change?

// evole or retire the corgi??? depending on what i decide to do

// remove the div so that the player knows the game ended

// goodbye and add an option to play again 

// makecorgiobj remake the corgi object in snakecase for the backend so rails can read it

// tally the points osea lo k pasa cada vez k punchas un buton 
// y como it interacts w the other progress bars osea if u click this how does it afffect the other bars
// how many points go up n how much goes down 
}