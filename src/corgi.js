class Corgi {
    static all = []
    constructor({name, id, hunger_meter, lonliness_meter, happiness_meter}){
        this.name = name;
        this.id = id;
        this.hungerMeter = hunger_meter;
        this.lonlinessMeter = lonliness_meter;
        this.happinessMeter = happiness_meter;
        this.count = 0;

        this.gif = `./animations/corgi.gif`

        Corgi.all.push(this)

}


//as soon as the adopt form is submitted all of this should pop up
valueLimit(val){
    let min = 0
    let max = 100
    Math.min(Math.max(parseInt(val), 0), 100);
    return val < min ? min : (val > max ? max : val)
}


setGif() {
    return this.gif = `./animations/corgi.gif`
}

renderProgressBarsInnerHTML(){
    let lonlinessLabel = ""
    if(this.lonlinessMeter >= 75){
        lonlinessLabel = "I am v loved!!!"
    }else if(this.lonlinessMeter <= 25){
        lonlinessLabel = "pls love me"
    }else{
        lonlinessLabel = "Lonliness"
    }


    return `
        <h1><strong>${this.name}</strong></h1>

        <label for="hunger">Hunger</label>

        <meter id="hunger-meter" value="${this.hungerMeter}" max="100">${this.hungerMeter}%</meter>
        
        <label for="lonlieness">${lonlinessLabel}</label>
        
        <meter id="lonliness-meter" value="${this.lonlinessMeter}" max="100">${this.lonlinessMeter}%</meter>
       
        <label for="happiness">Happiness</label>
        
        <meter id="happiness-meter" value="${this.happinessMeter}" max="100">${this.happinessMeter}%</meter>
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
progressBarsContainer.id = "progress-bars"


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
    this.timer = setInterval(this.gameHandler.bind(this))
}

// this is in charge of my progress bars 
gameHandler(){
    console.log(this.timer)
    // this tallies the points osea how each bar reacts w each button
   // this.handlePoints()
this.count ++
 //decrease the hunger and happiness meters, but not below 0
 if (this.count % 1000 === 0) {
    this.hungerMeter = this.valueLimit(this.hungerMeter -= 2)
    this.happinessMeter = this.valueLimit(this.happinessMeter -= 2)
    this.lonlinessMeter = this.valueLimit(this.lonlinessMeter -= 2)
     //update the progress bars
    this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML() 
}

 this.totalPoints()
 

this.byebyeCorgi()

}
 // if the points are below -100 have the corgi run away???
totalPoints() { 
    if (this.hungerMeter <= 0 || this.happinessMeter <= 0 || this.lonlinessMeter <= 0){
        this.removeDiv()
        //stop timer n display an alert??
        clearInterval(this.timer)
        corgiAdapter.deleteCorgi(this.id)
        showDangerAlert(`${this.name} ran away ☹`)
    }
}


// removes the game div says goodbye and gives an option to play again
byebyeCorgi() {
    if (this.count === 7500){
        clearInterval(this.timer)
        if (document.querySelector(".alert-danger")) {
        document.querySelector(".alert-danger").style.display = "none"
        }
        corgiAdapter.updateCorgi(this.makeCorgiObj(), this.id)
        this.removeDiv()
        let text = this.goodbye()
        createNote(text)
    }
    
}

// removes the div
removeDiv(){
    this.div.remove()
}

// goodbye that shows up when game is up
goodbye(){
    return `
    Dear ${User.all[0].name}, 
    <br>
    ♡ Thank you for caring for me. ♡
    <br>
    ♡ I am off to be an adult corgo and work at a firm in San Fransisco. ♡
    <br>
    ♡ Thanks for the good times, I wish you well ♡ 
    <br>
    ♡ Please consider adopting again ♡ 
    <br>
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
this.hungerMeter = this.valueLimit(this.hungerMeter += 5)
this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()
}

play(e){
this.happinessMeter = this.valueLimit(this.happinessMeter += 5)
this.hungerMeter = this.valueLimit(this.hungerMeter -= 3)
this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()
}

pet(e){
this.lonlinessMeter = this.valueLimit(this.lonlinessMeter += 5)
this.happinessMeter = this.valueLimit(this.happinessMeter += 3)
this.progressBarsContainer.innerHTML = this.renderProgressBarsInnerHTML()
}

}