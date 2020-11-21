class Corgi {
    static all = []
    constructor({name, id, hunger_meter, lonliness_meter, happiness_meter}){
        this.name = name;
        this.id = id;
        this.hunger_meter = hunger_meter;
        this.lonliness_meter = lonliness_meter;
        this.happiness_meter = happiness_meter;

        this.gif = `./animations/corgi.gif`

        Corgi.all.push(this)

}


//as soon as the adopt form is submitted all of this should pop up
valueLimit(val, min=0, max=100){
    return val < min ? min : (val > max ? max : val)
}

setGif() {
    return this.gif = `./animations/corgi.gif`
}

renderProgressBarsInnerHTML(){
    return `
        <h1><strong>${this.name}</strong></h1>
        <label for="hunger">Hunger</label>
        <progress id="${this.id}-hunger" class="progress is-small is-success" value="${this.hungerMeter}" max="100">${this.hungerMeter}%</progress>
        <label for="lonlieness">Lonliness</label>
        <progress id="${this.id}-lonlieness" class="progress is-small is-success" value="${this.lonlinessMeter}" max="100">${this.lonlienessMeter}%</progress>
        <label for="happiness">Happiness</label>
        <progress id="${this.id}-happiness" class="progress is-small is-success" value="${this.happinessMeter}" max="100">${this.happinessMeter}%</progress>
        `
}

renderCorgi(){


let corgiContainer = document.createElement('div')
corgiContainer.id = "corgi-container"
mainSection.appendChild(corgiContainer)


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
document.getElementById('mealButton')
mealButton.id = "mealButton"
this.mealButton = mealButton
mealButton.src = "./images/heart-button.jpg"
buttonsArea.appendChild(mealButton)
mealButton.addEventListener('click', this.meal.bind(this))

// pet button to pet || lonlieness meter
let petButton = document.createElement('img')
document.getElementById('petButton')
petButton.id = "petButton"
this.petButton = petButton
petButton.src = "./images/heart-button2.jpg"
buttonsArea.appendChild(petButton)
petButton.addEventListener('click', this.pet.bind(this))

// play button to play || happiness meter
let playButton = document.createElement('img')
document.getElementById('playButton')
playButton.id = "playButton"
this.playButton = playButton
playButton.src = "./images/heart-button1.jpg"
buttonsArea.appendChild(playButton)
playButton.addEventListener('click', this.play.bind(this))

// add progressbars n buttons
corgiDiv.append(progressBarsContainer, buttonsArea)

//add individual corgi div to main div
corgiContainer.appendChild(corgiDiv)


}

// starts game i need to see how to set up the timer
startGame() {
    this.timer = setTimeout(this.gameHandler.bind(this), 180000)
}

// this is in charge of my progress bars 
gameHandler(){
    // this tallies the points osea how each bar reacts w each button
    this.handlePoints()

 //decrease the hunger and happiness meters, but not below 0
 this.hungerMeter = this.valueLimit(this.hungerMeter - 1)
 this.happinessMeter = this.valueLimit(this.happinessMeter - 2)
 this.lonlinessMeter = this.valueLimit(this.lonlinessMeter - 2)
 //update the progress bars
 this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()  


 // if the points are below -100 have the corgi run away???
 if (this.totalPoints < -100){
     this.removeDiv()
     //stop timer n display an alert??
     clearInterval(this.timer)
     corgiAdapter.deleteCorgi(this.id)
     showDangerAlert(`${this.name} ran away ☹`)
}


}

// removes the game div says goodbye and gives an option to play again
byebyeCorgi() {
    if (this.timer === 180000)
    {this.removeDiv()
    let text = this.goodbye()
    createNote(text)}
}

// removes the div
removeDiv(){
    this.div.remove()
}

// goodbye that shows up when game is up
goodbye(){
    return `
    ./animations/corgigoingoff.gif
    Dear ${user.name}, 
    ♡ Thank you for caring me. ♡
    ♡ I am off to be an adult corgo and work at a firm in San Fransisco. ♡
    ♡ Thanks for the good times, I wish you well ♡ 
    ♡ Please consider adopting again ♡ 
    Sincerely, ${this.name}.`
}

// snakecase for backend
makeCorgiObj() {
    return {corgi: {
        id: this.id,
        name: this.name,
        hunger_meter: this.hungerMeter,
        happiness_meter: this.happinessMeter,
        lonliness_meter: this.lonlinessMeter
    }}
} 

// this is what makes the bars change 
handlePoints(){
    this.happinessHungerLonlinessPoints(this.hungerMeter)
    this.happinessHungerLonlinessPoints(this.happinessMeter)
    this.happinessHungerLonlinessPoints(this.lonlinessMeter)
}

happinessHungerLonlinessPoints(status){
    if (status < 25){
        this.totalPoints -= 5
    } else if (status < 50){
        this.totalPoints -= 3
    }else if (status < 75){
        this.totalPoints -= 3
    }else {
        this.totalPoints += 5
    }
}

// how much each button gives 
meal(e){
this.hungerMeter = this.valueLimit(this.hungerMeter + 5)
this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()
}

play(e){
this.happinessMeter = this.valueLimit(this.happinessMeter + 5)
this.hungerMeter = this.valueLimit(this.hungerMeter - 3)
this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()
}

pet(e){
this.lonlinessMeter = this.valueLimit(this.lonlinessMeter + 5)
this.happinessMeter = this.valueLimit(this.happinessMeter + 3)
this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()
}

}