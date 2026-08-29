//this topic is imp for react too

const user={
    username: "adarsh",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)  //current values/ current context ki baat krta h 
        //for current context we use the this keyword
        //like here we are refering to the same username of this const user so this is used 
    }
}


// user.welcomemessage()
// user.username="sam"  //yaha context change hogya
// user.welcomemessage()
//why did it cahnge to sam
//becuase we did not hard coded thevlaue we only said to give the current context of the user 


//console.log(this)  //yaha pe empty h
//kyuki node env me h yaha apka jo this h wo ek empty object ko refer kr rha h
//kyuki global me context hi nhi h



//browser ke andar jo global object h wo window h



//kaafi saari vlaues aagyi is neeche wale fucntion mo run krte hi crazy
//mtlb this me kuch to h

// function chai(){
//     console.log(this);
// }
// chai()



// function chai(){
//     let username="adarhs"
//     console.log(this.username);  //function me humara this kam nhi kr pata h
// } //objects me kam krt ah
// chai() //undefined


// const chai=function(){
//     let username="adarsh"
//     console.log(this.username);
// }
// chai()



//yhi h arrow fucntion h
const chai=()=>{
    let username="adarsh"
    console.log(this.username);
}
//chai()

//arrow fucntions dont have their own this
//they inherit this from the surrounding scope

//regular function → has its own `this`
//arrow function   → inherits `this`

//This distinction is very important in React.

()=>{}  //arrow function


// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
//curly braces use kiya to retunr likhna hi padega


// console.log(addtwo(3,4))



// //this is implicit 


// const addtwo=(num1,num2)=> num1+num2
// console.log(addtwo(3,4))


//parenthesis likha to return keyword use nhi krna padega
//const addtwo=(num1,num2)=> (num1+num2)


//const addtwo=(num1,num2)=> {username: "hitesh"}
//ye jo h upar ye object return hi nhi kr sakta kyuki we need parenthesis to return an object


const addtwo=(num1,num2)=> ({username: "hitesh"})
console.log(addtwo(3,4))


// const myArr=[2,3,4,5,6,7]

// myArr.forEach()