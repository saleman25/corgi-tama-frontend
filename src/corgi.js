class Corgi {
    static all = []
    constructor(name, id, hunger_meter, lonliness_meter, happiness_meter, evolution_countdown, corgi_type){
        this.name = name;
        this.id = id;
        this.hunger_meter = hunger_meter;
        this.lonliness_meter = lonliness_meter;
        this.happiness_meter = happiness_meter;
        this.evolution_countdown = evolution_countdown;
        this.corgi_type = corgi_type;
        // this.gif = code for the corgi gif ima use

        Corgi.all.push(this)
    }
}

// render corgi
//gif
//progressbars
//buttons
//gametimer
//pls someonesaysike
// how it grows up

setGif(){
    // gif i am going to use
}

renderProgressBarsInnerHTML(){
    // in here is going to go allthe corgi factors
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

//create div to hold all of the buttons
let buttonsArea = document.createElement('div')
buttonsArea.className = "buttons-area"

}

