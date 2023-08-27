class username{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username ${this.username}`);
    }
    createid(){
        return `34r5few5`
    }
}

const a = new username("user")
console.log(a.createid());


class username extends user{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone =  new username("iphone " , "iphone@.com")
console.log(iphone.createid())
