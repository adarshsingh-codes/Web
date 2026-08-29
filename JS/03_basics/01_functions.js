//fucniton is just a like
//mene ek code lih ah 10-20 line ka usko ek packge me band kr diya h (fucntion) and me usko jaha man wha copy kr sakta h

function sayMyname(){
    console.log("A")
    console.log("D")
    console.log("A")
    console.log("R")
    console.log("S")
    console.log("H")
}

//sayMyname   //this is function ka reference

sayMyname()  ///ye hogya execute 

function addtwonums(number1,number2){  //jaha function declare h or wha vlaues pass krte h to usse parameters kehte h 
    console.log(number1+number2);
}

addtwonums()   //Nan - kuch nhi hua

addtwonums(3,4)  //now its valid

addtwonums(3,"a")  //this is a conversion issue as we never told before how it is
//jaha fucntion execute hota h and wha jo values pass krte h usko arguments kehte h

function addtwonums_new(number1,number2){  //jaha function declare h or wha vlaues pass krte h to usse parameters kehte h 
    //method 1
    // let result=number1+number2
    // return result
    

    //method 2
    return number1+number2
}
const result=addtwonums_new(3,5)

console.log("Result:",result)   //ye undefined h


function loginUserMessage(username){
    if( username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//loginUserMessage("Adarsh")// ye print nhi hoga kyuki koi consolelog h hi nhi 

console.log(loginUserMessage("Adarsh"))

console.log(loginUserMessage())//undefined kyyuki no argument passed



//shopping cart type example
//in th cart users keep on addng everygin and we should be able to calcaute total


//ye ... ko rest ya spread bolte h
//dono ka lag contet me alag menaign hota h
//spread is sued for combinigarrays or objects so fat jitna i know
//and rest is for functions taking in eg : sbako ek bundle me pack kro or muhe dedo


//...num wha pe sab array me daldega
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000));  //val1 me 200 chalagya val2 me 400 and baaki jayega ... me

//both 

const user={
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
    //chekc krte rehna hoga same name and eveyrhtin kki bacend se kya ayega ye hume pata nhi hoga beforehand

}

handleObject(user)

handleObject({
    username: "same",
    price: 299
})

const newArr=[200,3000,4000,5000]

function returnSecondValue(getarr){
    return getarr[1]
}
console.log(returnSecondValue(newArr))

console.log(returnSecondValue([200,4000,4000,5000]))