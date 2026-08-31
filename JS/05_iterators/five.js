const coding=["js","rb","python","java","cpp"]

//high order function
//foreach loopconsole.log("-------------------------------------------------")
coding.forEach( function (item){
    console.log(item);
})
console.log("-------------------------------------------------")

//arrow fucntion
coding.forEach((item)=>{
    console.log(item);
})
console.log("-------------------------------------------------")
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)//function ka reference de rhe h


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})



const mycodin=[
    {
        langname:"javacript",
        langfilename: "js"
    },
    {
        langname:"java",
        langfilename: "java"
    },
    {
        langname:"python",
        langfilename: "py"
    },
]

mycodin.forEach((item)=>{
    console.log(item.langname);
})