// //let a=10;
// //const b=20;
// //var c=12;

// if(true)
// {
//     let a =10;// it cant be printed outside of this loop which is a good sign for the programminng
//     const c=30;//same goes for the consttt
//     // bt both let and const ca be printed inside this loop or inside this scopeee
//     var b=12; // bt in the case of var it can be printed outside the loop which
//     // is not a good sign for the programming snd devlopping
//     console.log(a);
//     console.log(c);
// }

// //console.log(a);
// //console.log(b);
// console.log(b);


function one(){
    const username= "user"

    function two()
    {
        const ws = "ytube"
        //console.log(username);
        //console.log(ws);
    }
    // console.log(ws); bcz the scope of the ws is ended inside the curly braces and we are t
    // trying to fetch data outside that scope so thts why it willl end up giving us the error
    // bt we can print it inside the scope 

    //two()
}
//one()


if(true){
    const username = "userr"
    if(username === "userr")
    {
        const web="ytube"
        //console.log(username+web);
    }
    // console.log(web);
    
}
//console.log(username);
// bcz in line no-46 and in line no-49 we are trying to fetch data from the scope bt they can be
//accesed after the curly braces so thts why it will end up giving us error bt it can always be
// accesed inside the curly bracesss as we did in line no 44..'


//*********************************INTRESTING STUFFFF************************************ */
console.log(add(68));
function add(num)
{
    return num+1;
}


const ass = function add1(num){
    return num+2;
}
console.log(ass);
//we can call the function anywhere function k upar neeche kahin bhi
// bt if the function is stored inside the datatype then aisa ni ho skta tb rule ar regulation 
// follow krne padenge like we can acces the firsr function bt we cant the second function




