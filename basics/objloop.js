const myobj = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by appple'
}

 for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
    //the for in loop can be used for to traverse in the obj
    
 }

 const programming = ["js" , "rb" , "py" , "java" , "cpp"]

 for (const key in programming) {
    // console.log(programming[key]);
 }

 const map = new Map();
map.set('IN' ,"INdia");
map.set('usa ' ,"united states of india");
map.set('Cn', "canada");
map.set('Rs',"RUssia");

for (const key in map) {
    console.log(map);
    // map cant be iteratable in this wayyy
    
}