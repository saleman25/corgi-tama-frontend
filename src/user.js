class User {
    constructor(name){
        this.name = name;
    }

// this should pop up after the adopt form?
renderProfile(){
    let mainSection = document.getElementById('main')
    mainSection.innerHTML = ""
    
    let corgiContainer = document.createElement('div')
    corgiContainer.id = "corgi-container"
    mainSection.appendChild(corgiContainer)

    corgiAdapter.createCorgi()
}


}

