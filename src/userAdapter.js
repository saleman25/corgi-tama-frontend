class UserAdapter {
    constructor(url){
        this.baseURL = url 
    }

    signUpUser(userObj){
        fetch(this.baseURL+'/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userObj)
        })
        .then(response => response.json())
        // blah blah error
        // currentuser = new user
        // render their profile 
        // add a catch for errors
            
        
    }

    loginUser(userObj){
        fetch(this.baseURL+'/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userObj) 
        })
        .then(response => response.json())
        // blah blah errors
        // current user = new user 
        // render profile
        // add a catch for errors
    }
}