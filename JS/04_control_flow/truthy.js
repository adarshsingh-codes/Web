const userEmail="adarsh@gmail.ai"
if(userEmail){
    console.log("got user email")
}else{
    console.log("Dont have user email");
}

// //falsy values  -the one whihc gives false

// false, 0, -0,BigInt 0n, "", null, undefined,NaN



//truthy values

//"0"-sting ke andar agar 0 h to sahi h
//similarly
//  'false'," ",[], {},function(){}

const userEmail2=[]
if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length){
    console.log("Object is empty");
}


//Nullish Coalescing Opearator(??) : null undefined ini dono pe kaam krta h

let val1
//val1=5??10
//val1=null??10
//val1=undefined??15

val1=null?? 10?? 20


console.log(val1);


//terniary operator


// syntax
// consdition ? true: false

const iceTeaPrice=200
iceTeaPrice<=100 ? console.log("less than 80"):console.log("more than 80")