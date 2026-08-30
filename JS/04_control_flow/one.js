// if statement

if(true){  //agar true h  to hi to if block execute hoga 

}

if(false){ //line number 8 se jaha tak scope h wo execute nhi hota h

}
const isUserloggedIn=true
if(isUserloggedIn){
    console.log(`Welcome`);
}

// >,<,<=,>=,==,===

// = - assign
// == -if its equal 
// != -if its not equal
// === - checks th evlaue and also the type 

const temperature=41

if(temperature<50){
    console.log("less than 50")
}else{
    console.log("temperature is greater than 50");
}


const score=200
if(score>100){
    const power="fly"
    console.log(`User Power: ${power}`);
}
//console.log(`User Power: ${power}`);  //not deifned becuase the scope of power is in IF statement and not outside

const balance1=1000
if(balance1>500) console.log("test");  //implicit scope

if(balance1>500) console.log("test"),
console.log("test2");   //is tarah se nhi krna h

const balance=1000
if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIN=true
const debitcard=true

if(userLoggedIN&&debitcard){
    console.log("Allow to buy course");
}

const loggedInFromGoogle=false
const loggedInfromEmail=true

if(loggedInFromGoogle||loggedInfromEmail){
    console.log("user logged in");
}