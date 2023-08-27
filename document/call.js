function setname(username){
    this.username = username
}

function createuser(username , email, password){
    setname.call(this , username)
    console.log("called")


    this.email = email
    this.password= password
}
const err = new createuser("chai" , "chai@gmail.com" , "123333")

console.log(err);