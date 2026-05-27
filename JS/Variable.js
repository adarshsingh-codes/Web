const accountId =144553
let accountEmail="hitesh@gmail.com"
var accountPassword="123345"
accountCity="Jaipur"//bad practice

let accountState; //since no value therefore undefined

accountEmail="hc$gmial.com"
accountPassword="245432"
accountCity="bangaluru"
// accountId=2  //const keyword cant be changed 
/*
    Prefer not to use var 
    because of issue in block scope and 
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])