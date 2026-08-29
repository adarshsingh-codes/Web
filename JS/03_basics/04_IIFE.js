//immediately Invoked functions expressions(IIFE)
//An IIFE is a function that is created and immediately executed.



//this is the syntax of IIFE
(function chai(){
    console.log(`DB connected`)
}());


//global scope ke pollution se probmlem hoti h kayi baar to us global scope ke pollution ko hatane ke liye we used IIFE
// IIFEs can be used to create a private scope
// and avoid polluting the global scope.



//now we see that upar wale me jab semi colon nhi tha to ye file me error tha kyuki it didnt know kaha rokna h IIFE funciton ko 
//but gar wha ek semi colon h to its all cool and we cna run multiple

//how to write it using arrow fucntions

( function chairaurcode(){  //this is named IIFE
    console.log(`DB connected TWO`)
})();



//now this arrow fucntion works too
(()=>{   //this is unnamed IIFE
    console.log(`hello zi`)
})();

((name)=>{
    console.log(`hello ${name} `)
})('adarsh')


// //normal fucntion
// function hello(){

// }


// //arrow fuction
// const hello=()=>{}