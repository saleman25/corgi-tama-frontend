class UserAdapter {
    constructor(url){
        this.baseURL = url 
    }


    loginPlayer(userObj){
        fetch(this.baseURL+'/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userObj) 
        })
        .then(response => response.json())
        .then(json => {
            currentUser = new User(json.userdata.user)
            currentUser.renderProfile
        })
        .catch(errors => "Oh no something went wrong!")
    }
}