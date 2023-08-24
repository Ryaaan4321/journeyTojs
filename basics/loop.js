
for(let index =0;index<10;index++){
    const elem = index;
    console.log(elem);
}


for (let i = 0; i < 10; i++) {
    // console.log(`outer loop value ${i}`);
    for(let j = 0;j<=10;j++){
        //console.log(`innner loop value ${j} and outer loop value ${i}`)
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}


let myarr = ["flash" , "batman", "superman"];
// console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    
}
//88888888888888888888888888888888888*********88888888888888888888888888888888888888888888

//break and continueeee

for (let index = 0; index < 20; index++) {
    if(index ==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
    
}
