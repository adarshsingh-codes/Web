const score=480
console.log(score)
//exclusively defining

const balance=new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2))


//precision thoda lag h dhyan se krna
const OtherNum=23.4543
console.log(OtherNum.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++++++++++++++++++maths+++++++++++++++++++++++++

console.log(Math)
//same just give it time to understand the functions







//++++++++++++++++++++++++Date&Time+++++++++++++++++++++


//Dates

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());

console.log(typeof myDate);  //object

let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString());