// "use strict";  //this line treats all js code as newer version   //generally it is automatic

// //alert("hello");
// //alert(3+3);   we are using node js not browser
// //code readability should be high
// console.log("name");
// console.log(3+3);
// let name="adars"  //string datatype
// let age=20;         //number
// let isLoggedIn=false       //boolean
// //let state=null;    


//datatypes-primitive
// //number=>2 to power 52/53 
// //bigint   ->if number is very big
// //string =>" "
// //boolean =>true/false
// //null =>standalone value 
//null is a representation of empty value  it is a special type
// //undefined => when a value is ot defined similar to something lke let accountstate;
// //symbol =>unique

// //object

// console.log(typeof "hitesh");  //typeof batata h ki kis type ka datatype h
// console.log(typeof age);

// console.log(typeof null);  //output: object
// console.log(typeof undefined); //output: undefined








// // //data type conversions
// let score="30"

// console.log(typeof score );
// console.log(typeof(score));
// console.log(typeof{score});

// let valueInNumber=Number(score)
// console.log(typeof valueInNumber );
// console.log(valueInNumber)



// let score2="30abc"
// let valueInNumeber2=Number(score2);
// console.log(typeof valueInNumeber2);
// console.log(valueInNumeber2);  //NaN this means not a number
// Number se Nan bhi aa sakta h as 30abc and 30 dono ko number boldega


// let score3=null;
// console.log(typeof score3);
// let valueInNUmber3=Number(score3);
// console.log(typeof valueInNUmber3);
// console.log(valueInNUmber3)


// let score4=undefined;
// console.log(typeof score4);
// let valueInNUmber4=Number(score4);
// console.log(typeof valueInNUmber4);
// console.log(valueInNUmber4)




//"33" =>33
//"33abc" =>NaN (not a number)  NaN ka type number hi h
//true=>1
//false=>0



// let isLoggedIn= ""

// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


// // 1=>true; 0=>false;
// //" " =>false;
// //"hitesh" =>true

let someNumber= 33
let StringNumber=String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)