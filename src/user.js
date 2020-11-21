class User {
    constructor(userObj){
        this.name = userObj.name;
        this.id = userObj.id;

        User.all.push(this)
    }


static all = []


}

