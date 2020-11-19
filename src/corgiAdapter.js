class CorgiAdapter{
    constructor(url){
        this.baseURL = url
    }

// i don't think i need this anymore bc i am not doing multiple corgis
getCorgis(){
    fetch(this.baseURL, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
    .then(resp => resp.json)
    .then(corgis => {
        corgis.forEach(corgi => {
            corgi = new Corgi(corgi)
            // make a render corgi in corgi.js corgi.renderCorgi()
        })
        if (Corgi.all.length === 0){
            // make a renderAdoptionForm() in corgi.js that holds the adoption form
        }
    })
    .catch(errors => um(errors)) 
        // make um an actual fnction
}


// update the corgi osea how old he is!
// updateCorgi(){}


// this is what happens as soon as the corgi was created 
createCorgi(name){
    fetch(this.baseURL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(name)     
    })
    .then(response => response.json())
    .then(data => {
        const newId = document.createElement('h1');
        const text = document.createTextNode(`${data.id}`);
        newId.appendChild(text);
        document.querySelector('main').appendChild(newId);
    })
    .catch(error => {
        const newError = document.createElement('h5');
        const text = document.createTextNode(`${error.message}`);
        newError.appendChild(text);
        document.querySelector('body').appendChild(newError);
    })
}

// i am not sure if i still need this one either
deleteCorgi(id){
    fetch(this.baseURL+'${id}', {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
    })
}
}









