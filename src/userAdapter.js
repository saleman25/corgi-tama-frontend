class UserAdapter {
    constructor(url){
        this.baseURL = url 
    }

// this gets the info from idex.js of the name that was inputted and saves it

    loginPlayer(userObj){
        fetch(this.baseURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userObj) 
        })
        .then(response => response.json())
        .then(json => {
            currentUser = new User(json.userdata.user)
        })
        .catch(error => {
            const newError = document.createElement('h5');
            const text = document.createTextNode(`${error.message}`);
            newError.appendChild(text);
            document.querySelector('main').appendChild(newError)
        })
    }
}