//array


//square brackets []     //used for arrays
//curly braces or simply braces  {}
//parentheses  ()
const myArr1=[0,1,2,3,4,5,true,"adars"] //need not be a single type of element
//can be resized not necessarily fixed
//can be a mixed of diff datatype elements
//0 based indexing
//whenever we do a copy in JS for arrays  a shallow copy is created

//shallow copy: a copy whose posperties share the same references (point to the same underlying values) as those of the souce object
//same change takes place in the original array 

//deep copy: wont change the original array
const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[0]);
 

//Array methods

myArr.push(6);
myArr.push(7);
myArr.pop()  //removes last element
myArr.unshift(9)  //adds it to the 0 index (start of the array) and right shift all elements by 1
myArr.shift()   //removes the first elemnt
console.log(myArr.includes(9));
console.log(myArr.indexOf(3)); 

const newArr=myArr.join()  //makes it string

console.log(newArr);   
console.log(typeof newArr);
console.log(typeof myArr);
console.log(myArr);


//slice , splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);


console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//in slice: a copy of the range-1 is printed
//while in splice: the whole secion iscarved out of the array //that is array got manipulated


//++ array part 2 ++++

const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros)  //mergers both array

//spread opertor does the merging too

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]


//flat makes all the internals array into one outer array
const real_another_arr=another_arr.flat(Infinity);
console.log(real_another_arr)


console.log(Array.isArray("Adarsh"))  //checks if it is array
console.log(Array.from("Hitesh"));   //converts into array
console.log(Array.from({name:"Adarsh"}));  //empty array as we didnt specify whether we want it for the keys or for values


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
//of also does the work of from but in a diff manner