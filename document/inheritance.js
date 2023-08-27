class user {
    constructor(username){
        this.username= username;
    }

    logme(){
        console.log("logged in!..")
    }


}

class Teacher extends user{
    constructor (username, email , password){
        super(username)
        this.email = email;
        this.password = password
    }

    addcourse(){
        console.log(`a course was added by ${this.username}`)
    }
}

const cc = new user ("chaii" , "cc@gmail.com" , "fdbjdjkdahudsjkisd267");

cc.addcourse();
