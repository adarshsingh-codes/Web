// for of  -it is an array sppecific loop

["","",""]
[{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings="hello world!";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//maps

//map stores the insertions in the order only 
//and also there is no  duplicates

const map=new Map()
map.set('IN',"india")
map.set('USA',"united sattes of america")
map.set('FR',"frace");

console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key, ':-', value);
}


const myobj={
    'game1':'NFS',
    'game2':'spiderman'
}


//aese nhi chalega object
for( const[key,value] of myobj){
    console.log(key, ':-', value);
}