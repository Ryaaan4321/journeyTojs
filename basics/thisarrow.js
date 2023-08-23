const user = {
    username :"rnnnn",
    price :999,

    welcomeMessage :function(){
        //console.log(`${this.username} welcome homee` );
       // console.log(this);
    }
}
user.welcomeMessage()

// user.username = "user2";
// //console.log(user.price);
// //console.log(user.username);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai= ()=>{
//     let username = "userrr"
//     console.log(this);

// }


// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addtwo= (num1,num2)=> num1+num2
// console.log(addtwo(3+3))


const another =(num1,num2) => {{username:"hitesh"}}

console.log(another(4,3));

