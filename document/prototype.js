let thename = "userrr   "

// console.log(thename.truelength);
// console.log(thename.trim().length);


let arr = ["thor" ,"spiderman"]

let hero = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spider power is ${this.spiderman}`);
        // console.log(`thor power is ${this.thor}`);
    },
    getthorpower:function(){
        console.log(`thorpower is ${this.thor}`);
        // console.log(`thor power is ${this.thor}`);
    }
}
console.log(hero);

const error = {
    througherror:true,
    goerror:false
}

const tt =  {
    makereel:true
}

const tts ={
    isavailable :false
}

const tasupport={
    editv:'videoed',
    fulltime:true,
    __proto__:tts
}

tt.__proto__ = error
Object.setPrototypeOf(tts , tt)


let anotheruser = "chai ar bahut sari chaii"

string.prototype.truelength = function(){
    console.log()
}