//objects are of two typess
//1. singleton
//2. multiple instanes

//when we make objects from object literals then it made multiple instance objects

//how to create a object

//Object.create()// this helps us to make singelton objectsss
const mSym=Symbol("key1")
const user ={
    name:"hhh",
    class:4,
    [mSym]:"mykey1",
    skul:69,
    k3fnriluhjbhgffhnw34rqefujh:"Ul",
    g_mail:"user@gmail.com",
    isLoggesin:false,
    lastLogindays:["monday","saturday"]


}


// console.log(user.lastLogindays);
// console.log(user["lastLogindays"])
// console.log(user);
// `console.log(user);

// Object.freeze(user);// it freeezes the obj which means after tht  we can't add any type of values 
// //in the object

// user.g_mail="nb@gmail.com"
// console.log(user);

// user.greeting =function(){
//     console.log("heloooo helloooo");
// }

// user.greeting1 =function(){
//     console.log(`hello js user,${this.name} `);
// }
// console.log(user.greeting());

// console.log(user.greeting1());
  