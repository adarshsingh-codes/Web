// let a=10
// const b=20
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)

// {}  //isi ko scope bolte h //curly braces ko
// //block scope hota h ye
// var c=300

// //if ke bahar sab global scope hota h

// //and if ke andar its local scope

// let a=300
// if(true){    //is scope ka kaam isi ke andar tak h iska scope bas itna hi h //line 10 se line 14
//     let a=10
//     const b=20
//     var c=30
//     console.log(a)
// }
// console.log(a)//for global wala
// //console.log(a) //ye error dega koi a to ek IF block ke andar declared tha
// //console.log(b)  //similarly ye bhi dega error kyuki IF block me tha bahar nhi
// console.log(c)    //lekin ye print hogya 30 wtf


//abhi we can see that upar wale me jo var c =300 h and if block ke nadar jo var c h jo kuch to ho rh ah
// and c is taken to be 30 whihc should not be possible but yet it is 
//that is why we avoid th eusage fof var


//browser e ja k  inspect me jo scope dekhte h 
//aur vsocde me hu jo node ke thorugh run krke global scope dekhte h wo alag h

//The global environment isn't identical between browsers and Node.js.

//browser has window as the global object
// node.js has global 


//Scope rules are JavaScript rules, but the surrounding runtime/environment differs between browser and Node.js.


//let    → block scoped
//const  → block scoped
//var    → function scoped


//for modern js
//const → default choice
//let   → when value needs reassignment
//var   → generally avoid





//jab bhi {} ye banta h in for loops, if else , fucntion to ye block scope hot ah and iska zyada koi connection nhi hota gloabl se



//---------------------------nested scope-------------------


//jitninbaar fucntion banta h uska ek call stack banta h
function one(){
    const username="adarsh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.assertlog(website);
    two()
}
//one()


if(true){
    const username="adarsh"
    if(username==="adarsh"){
        const website=" youtube"
        console.log(username+website) 
    }
    //console.log(website) //uye error dega kyuki  webste internal if me h
}

//console.log(username)  //ye bhi errpor dega kyuki username ek block scope me h


//++++++++++++++++++ intersting +++++++++++


console.log(addone(5))

function addone(num){  //is tarha se fucntin bana rhe h to pehle y abaad akbhi bhi access kr sakte
    return num+1
}



//js me vairbales boht stong h wo sab hold kr lete h 
//be it json files, functions, values


addtwo(5)   //yha error ayega
const addtwo=function(num){  //is way me agar hum fucntion declare kr rhe h tyo hamesha we can adccess it baaad me only not pehle 
    return num+2
}

addtwo(5)  //yha nhi aayega error
