///constructor


const tinderUser1= new Object()  //this is also a way to create Objects  //singleton
console.log(tinderUser1)

const tinderUser3={}  //this is also a way to crete obejcts  //non singleton
console.log(tinderUser3)


const tinderUser={}

tinderUser.id="123as"
tinderUser.name="Addu"
tinderUser.IsLoggedIn=false


const regularUser={
    email:"sboabfa@gmial.com",
    fullname: {
        userfullname:{
            firstname: "adarsh",
            lastname: "singh"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1={1: "a", 2:"b"}
const obj2={3: "a",4: "b"}

const obj4={obj1,obj2}
console.log(obj4)

const obj3_1=Object.assign(obj1,obj2)  //this gives it fine
const obj3=Object.assign({},obj1,obj2)  //but the empty parenthesis tells us that we cobine th eother two and will def get a rsult stored
//the aprenthesis is target and the orhter objects is the source

// const objec=Object.assign(target,source)
console.log(obj3)


//most commonly wewill use this
const obj5={...obj1,...obj2}
console.log(obj5)


//jab bhi database se vlaue aati h to ye array of bjtcs ayega 

const user=[
    {
        id:1,
        name:"adarsh"
    }
    ,
    {
        id:2,
        name:"singh"
    }
]

console.log(user[0])
console.log(user[0].name)

console.log(tinderUser)

console.log(Object.keys(tinderUser))  //datatype : array

console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));  //noth keys and vlues botha s arrays each pair and overall

console.log(tinderUser.hasOwnProperty('IsLoggedIn'))  //tells weather a key exist fo such name or not
console.log(tinderUser.hasOwnProperty('LoggedIn'))



//__________________________OBject de structure__________________________________

const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

//console.log(course.courseInstructor)


//yhi neeche jo curly braces h issi ko de structuring bolte h
const {courseInstructor}=course  //this is easy wehn we have to repeatly print or use the object key
console.log(courseInstructor)

const {courseInstructor:ins}=course  //we can assign a smaller name too

console.log(ins)


// //react ka h
// const navbar=({company})={

// }
// navbar(company="adarsh")


//-----------------API-------------------

//api is when we ask someone else to do our work

//JSON
//aesa dikhta h

//object ka koi naam nhi hota

// {
//     "name":"adi",
//     "coursename":"js",
//     "price": "free"
// }

//kayi baar api array ke form me milti h

[
    {},
    {},
    {}
]