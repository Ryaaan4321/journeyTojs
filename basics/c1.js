// control flow
const balance = 600;
if(balance <500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("kess than 900");
}else{
    console.log("less than 600");
}

const userloggedin = true;
const debitcard = true;
const loggedin = false;
const loggedinfromemail = true;
if(userloggedin && debitcard){
    console.log("allow to buy course");
}
if(loggedin || loggedinfromemail){
    console.log("user  logged in");
}
