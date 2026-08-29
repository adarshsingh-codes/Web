//JAvascript Execution Context

const { useContext } = require("react")


//apne jis file ko bhi banayo h ,JS usko execute kese kregi usko run kese kregi

//JS apke program ko 2 phase me run krti h

//global execution context    

//functional execution context   


//extra
// Eval execution context  -//property of global executin context

//two phases 

//1-memory creation phase or creation phase
//memory creaion phase me - sirf jo hume banaya h varible ,objects usko memeory allocate hoti h
//no mathematical functions

//2-execution phase



let val1=15
let val2=5

function addNum(num1,num2){
    let total=num1+num2
    return total
}

let result1=addNum(val1,val2)
let result2=addNum(10,2)



//step 1- global execution(global environment)  ye allocate hota h this ke andar
// step 2 - memory phase -allocates memory to all variables
//val1-undefined
//val2=undefined
//addnum= defination  //funcaion fucntion ke andr ki cheeze isme chali jayegi
//result 1= undefined
//result 2= undefined
//ye upar wala cyle 1 hota h

//ab cycle 2

// step 3 execution phase
//val1=10
//val2=5
//addnum //iska kuch hoga hi nhi  //ye function apna khud ka ek new executional context bana ta h
//yha banega new env + execution thread
//wpaas se step 2 and step 3 chalega for every time a fucntion is called

//result1=   //first time yha banega
//result2=  //esecond time yha

//ab jab addnum pehli baar call hua
//memory phase
//val1=undefined
//val2=undefined
//total=undefined

//uske baad execution Context
//num1=10
//num2=5
//total=15
//ye return hoga to gloabl execution context me retnrho jayega


//simialrly for second call