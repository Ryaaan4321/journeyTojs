const user = {
    username:"user",
    logincount:5,
    signedIn:true,


    getuserdetails:function(){
        console.log("got user details from database");
        // console.log(`username ${this.username}`);
        // console.log(this);

    }
}



//console.log((user.username))
//console.log(this)


function User(username, logincount , isloggedIn){
    this.username = username;
    this.logincount=logincount;
    this.isloggedIn=isloggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this;
}

const userOne = ("error",12,true)

console.log(userOne);