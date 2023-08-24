const mynum = [1 , 2 , 3 , 5]

// const mytotal = mynum.reduce(function (acc , curval){
    // console.log(`acc : ${acc} and currval: ${curval}`);
    // return acc+curval


// } ,0)


// const mytotal = mynum.reduce((acc,curr) => acc+curr ,0)

// console.log(mytotal);


const shopingcart =[
    {
        itemname:"jscourse",
        price:895885
    },
    {
        itemname:"javacourse",
        price:895889
    },
    {
        itemname:"pycourse",
        price:895889
    },
]
const pricetopay = shopingcart.reduce((acc, item) => acc + item.price,0)

console.log(pricetopay);
