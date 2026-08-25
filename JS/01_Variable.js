const accountId =144553     
//once a constant is declared ,we dont change it usually,mtlb value lock krdi h
 

//variables declare krne ke do tareeke h , let /var 

//we dont generally use var  cuz of the scope {}... var doesnt knwo about scope earlier days
// so we will use let
let accountEmail="adarsh@gmail.com"
var accountPassword="123345"
accountCity="Jaipur"//bad practice 
//global variable since nothign is assingned
let accountState; //since no value therefore undefined

accountEmail="hc$gmial.com"
accountPassword="245432"
accountCity="bangaluru"
//accountId=2 //not allowed  //const keyword cant be changed 
/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

//Avoid undeclared variables and generally avoid var.