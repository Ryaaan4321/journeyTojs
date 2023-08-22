// function saymyname(){
//     console.log("hh");
//     console.log("hht");
//     console.log("ytu");
//     console.log("ppo");
//     console.log("iiyo");
// }
// // saymyname();

// function addnum(num1 ,num2)
// {
//     console.log(num1+num2);
    
// }

// function addnum1(num1,num2)
// {
//     let res=num1+num2
//      return res;
//     //return num1+num2;
// }
// const res = addnum(8 ,890);
// console.log("Reslut:",res);


// function loginuser(username)
// {
//     if(username === undefined)
//     {
//         console.log("please enter a name")

//     }
//     return `${username} just logged in`

// }
// // console.log(loginuser("user1"))
// console.log(loginuser());


function calclulateprice(...num1)
{
    return num1


}
//console.log(calclulateprice(289,34,657))
const user = {
    username :"hitesh",
    price:199
}

function handlejob(anyobj)
{
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}
// handlejob(user)

handlejob({
    username:"sam",
    prie:340
})

const mynewArr = [57, 56, 34 , 56 ,78];

function reurnsecval(getArr)

{
    return getArr(12);

}
// console.log(reurnsecval(mynewArr));