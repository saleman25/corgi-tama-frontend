//get 
//patch
//create post
//delete


class CorgiAdapter{
    constructor(url){
        this.baseURL = url
    }

getCorgi(){
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


// update the corgi osea how old he is

createCorgi(name){
    fetch(this.baseURL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)     
    })
    .then(response => response.json())
    .then(json)
    // erorrrororos
}

deleteCorgi(id){
    fetch(this.baseURL+'${id}', {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
    })

}









}