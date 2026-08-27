const name="adarsh"
const repoCount=50
console.log(name+ repoCount+" value")  //outdated way to concatenate  


//modern JS ES6+
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


//string declaration //ye object invoke krta h//stirng is an object
const gameName=new String('Adarsh-hc')

console.log(gameName.split('-'))

console.log(gameName[0])  //indexed based
console.log(gameName[0].__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));   //charAT se hum dekh sakte h kis index pe konsa character h

console.log(gameName.indexOf('s')); //ye batata h ki kis index vlaue pr mera wo character h

const newString=gameName.substring(0,4); //(inlcusive,not inclusive)
console.log(newString);
const Str=gameName.slice(3,6); //same(inckusive, not inclusive)
const str2=gameName.slice(-4,2) //negative indexing possible 
console.log(Str);

const newStringOne="           Adarsh        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url=" https://adarsh.com/adarsh%20choudhary"
console.log(url.replace('%20','-'));



//---modern ES6+ is what i wanna learn
const sentence="Javascript is awesome";

console.log(sentence.includes("Javascript"));
console.log(sentence.includes("Python"));

const newName="Adarsh Singh"
console.log(newName.startsWith("Adarsh"));
console.log(newName.endsWith("Adarsh"));

console.log(newName.replaceAll('h','b'));