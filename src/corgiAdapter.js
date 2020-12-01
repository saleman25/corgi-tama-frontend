class CorgiAdapter{
    constructor(url){
        this.baseURL = url
    }

// updates corgi 
updateCorgi(corgiObj, id){
    fetch(this.baseURL+`corgis/${id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(corgiObj)  
    })
}

// this is what happens as soon as the corgi was created 
createCorgi(corgi){
   
    fetch(this.baseURL+"/corgis", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: corgi.name, user_id: User.all[0].id})     
    })
    .then(response => response.json())
    .then(data => {
        const newCorgi = new Corgi(data);
        console.log(data)
        const newId = document.createElement('h1');
        const text = document.createTextNode(`${data.id}`);
        newCorgi.renderProgressBarsInnerHTML();
        newCorgi.startGame();
        newCorgi.renderCorgi();
        newId.appendChild(text);
        document.querySelector('main').appendChild(newId);
    })
    .catch(error => {
        const newError = document.createElement('h5');
        const text = document.createTextNode(`${error.message}`);
        newError.appendChild(text);
        document.querySelector('main').appendChild(newError);
    })
}


deleteCorgi(id){
    fetch(this.baseURL+`corgis/${id}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
    })
}
}









