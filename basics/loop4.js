const coding = ["js" , "ruby" ,"java" , "py" , "cpp"]
coding.forEach( function (item) {
    // console.log(item);

})

coding.forEach( (item) =>{
    // console.log(item)
})

function printme(item){
    // console.log(item);
}
// coding.forEach(printme);



coding.forEach((item , index ,arr)=>{
    // console.log(item , index , arr)
})


const mycoding = [
    {
        langaugename : "javascriptt",
        languagefilename :"js"
    },
    {
        langaugename :"java",
        languagefilename:"java"
    },
    {
        langaugename:"python",
        languagefilename:"py"
    },
]

mycoding.forEach((item)=>{
    console.log(item.langaugename);
})