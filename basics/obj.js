// //objects are of two typess
// //1. singleton
// //2. multiple instanes

// //when we make objects from object literals then it made multiple instance objects

// //how to create a object

// //Object.create()// this helps us to make singelton objectsss
// const mSym=Symbol("key1")
// const user ={
//     name:"hhh",
//     class:4,
//     [mSym]:"mykey1",
//     skul:69,
//     k3fnriluhjbhgffhnw34rqefujh:"Ul",
//     g_mail:"user@gmail.com",
//     isLoggesin:false,
//     lastLogindays:["monday","saturday"]


// }


// // console.log(user.lastLogindays);
// // console.log(user["lastLogindays"])
// // console.log(user);
// // `console.log(user);

// // Object.freeze(user);// it freeezes the obj which means after tht  we can't add any type of values 
// // //in the object

// // user.g_mail="nb@gmail.com"
// // console.log(user);

// // user.greeting =function(){
// //     console.log("heloooo helloooo");
// // }

// // user.greeting1 =function(){
// //     console.log(`hello js user,${this.name} `);
// // }
// // console.log(user.greeting());

// // console.log(user.greeting1());



// ///OBJECT PART -2
// //const user2 = new Object()  //singleton object
// // const  user3 ={} //non-singleton object
// // user3.id = "hmmmm1"
// // user3.name ="ffcbbferjui"
// // user3.isLoggesin =false;

// // console.log(user3)


// const ruser ={
//     email : "user@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"fallane",
//             secondnmae:"dhakane"

//         }
//     }
// }
// console.log(ruser);
// console.log(ruser.fullname.userfullname)


// const obj1={1:"a" ,2:"b"}
// const obj2={3:"c",4:"d"}

// //const obj3={obj1,obj2};
// // const obj3=Object.assign({},obj1,obj2);
// const obj3={...obj1,...obj2}
// console.log(obj3)


//object -3

const  course = {
    coursename:"jshindi",
    price:"876",
    courseinst:"userr"
}

//course.courseinst
const {courseinst:inst}= course
const {courseinst}=course
console.log(courseinst);// 
console.log(inst);//oper wale jaise hi print karegaaa




 