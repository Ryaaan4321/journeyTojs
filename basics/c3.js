const useremail = "user@gmail.com";

if(useremail){
    // console.log("got user email");
}else{
    // console.log("dont have user email");
}

// false valuessss

// false , 0 ,-0 , On , " " ,null  , undefined , NaN , BigInt;

//  true valuessss
// ("0" it is true);
//  ('false 'it is also true');
// ("" it is also true);
// ( [] this is also  );
// ({} this is also);
//( function(){} 'this is alsoooo' )

const  emptyobj = {}

if(Object.keys(emptyobj).length ===0){// object.keys changes the object into the array//
    console.log("object is empty")
}


// nulllish coalescing valuesssss (??): null undefined

let val1;
// val1= 5?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

// terniary operator;

//condition ? true :false

const icetea = 100;
icetea <= 80 ? console.log("less than 80"): console.log("more than 80")