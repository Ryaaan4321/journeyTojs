// for of..loop

const  arr =[1 , 2, 4 ,3]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "hello errors!"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

const map = new Map();
map.set('IN' ,"INdia");
map.set('usa ' ,"united states of india");
map.set('Cn', "canada");
map.set('Rs',"RUssia");

// console.log(map); // maps are known for to store the unique valuesss 


for (const key of map) {
    // console.log(key);
    
}
// 2nd form to print this in for of loop

for (const [key,value ]of map) {
    // console.log(key,value);
    
}

const myobj = {
    'game1':'nfs',
    'game2':'spiderman'
}

for (const [key,value] of myobj) {
    console.log(key, value)
    //we cant iterate in objeect using for of loopppppp
}