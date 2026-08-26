// console.log(2>1); //answwers will be in boolean values
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);



//comapre karne se pehle ye zarruru rakhna ki dono ka datatype same ho  kyuki kabhi klabhar
// preferable result nhi deta
// console.log("2" >1); 
// console.log("02">1);



//for >=&&<= nullis converted to 0
//null kabhi NaN hota h ya kabhi 0 me


//clean code ka vlaue h

//the reason is that an equlaity check == and comparison > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0
//that is why (3) null>=0 is true and (1) null>0 is false;


console.log(null>0);
console.log(null==0);
console.log(null>=0); 


//undefined ko kisis ke saath bhi kre wo value false hi deta h
console.log(undefined==0);
console.log(undefined>=0);

//strict check ===
//it checks the value and the datatype both

console.log("2"==2)
console.log("2"===2)