//two types of datatypes: primitive and non primitive
//kis tarrrke se memeory me stpre huanh and kistareeke se data ko access kr sakte h

//primitive:
/*
    7 categories : callby value hota h
    1.String
    2.Number
    3.Null   null means empty
    4.Number
    5.undefined
    6.Symbol
    7.BigInt       big values 
*/

//JS is dynamically typed


const score=100
const scoreValue=100.3

const isLoggedIn=false;
const outsideTemp=null;

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId)

const bigNumber=123456787654323456n //this n at the end specifies BigInt

//agar hum symbol me value bhi same pass kre to bhi they are assifned uniquely
//Because Symbol() creates a unique value every time, even if the description is identical.





//Non primitive or:
//Reference type :
//java master: objects & browser events
/* 
    1.Array
    2.Objects
    3.Functions
    4.
*/

//array
const heroes=["Shaktiman","naagraj","doga"]


//objects
let myObj={
    name: "adarsh",
    age: 22,
};

const myFunction=function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof heroes)