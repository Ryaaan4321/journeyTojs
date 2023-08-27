class user {
    constructor(username , email , password){
        this.email = email
        this.username = username
        this.password = password
    }
    encryprpass(){
        return `${this.password}abc`
    }
    changename(){
        return `${this.username}`
    }
}

const err= new user("cc" , "cc@gmail.com" , "123342")

// console.log(err.encryprpass())
// console.log(err.changename())

//BEHIND THE SCENE IF WE ARE NOT USING THE CLASSSS 


function user1(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryprpass = function (){
    return `${this.password}abc`
}

user.prototype.changename = function(){
    return `${this.username}`
}

const func =  new user1("cc" , "ccc@gmail.com" , "23858fhfubfjsab")


console.log(err.encryprpass())
console.log(err.changename())