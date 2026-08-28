//JS ko seekhna h to objects or events janlo ho jaygea


//singleton -agar constructor ke thorugh object banate h to wo ek singleton ki tarah exist krta h
//dusre tareeke(Literals) se banane me wo multiton ho jata h

//object literals


//Object.create   iske through be object banta h and this is the constructor method

const mySym=Symbol("key1")
const mySym2=Symbol("key2")

//one common interview question is:
//take a symbol use it as a object key and print krke dikhado


const JSuser={   //key value pairs
    nams: "Adarsh",     //the key here-name is porcessed as "name" internally that si it is treated as a string
    "full name": "Adarsh Singh",
    mySym: "mykey1",  //wrong syntax
    [mySym2]:"mykey2",  //this is the way to access the sumbol correctyl
    age: 21,
    location: "chennai",
    email: "adarsh@gmail.com",
    isLoggedIn: ["Monday","Saturday"]
}

console.log(JSuser.mySym)
console.log(typeof(JSuser.mySym))  //as we can see if wwe do it thatwas ten itis treated as a string and not a symbol

console.log(JSuser[mySym2])
console.log(typeof(JSuser[mySym2]))

//object acess

console.log(JSuser.email);
console.log(JSuser["email"]);
//console.log(JSuser.full name); //for spaced leys we cant use this 
//so we use this format

console.log(JSuser["full name"])





//how to chage values

JSuser.email="singh@gmail.com" //now its overwritten no issue

//Object.freeze(JSuser)  //now we hva efreezed the object so no one can change the values of the keys inside the object
JSuser.email="hogakoi#+@gmail"
console.log(JSuser["email"]) //when we run we can see that the before Freeze the change is written but not anyhting else



JSuser.greeting=function(){
    console.log("Hello JS user")
}

JSuser.greetingTwo=function(){
    console.log(`Hello JS user ${this.name}`)   //this is like a pointer to a specififc JSuser
}

console.log(JSuser.greeting);//undefined

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());