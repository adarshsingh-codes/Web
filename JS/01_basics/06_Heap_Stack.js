//********************Heap and Stack memory */

//Stack memory & heap memory


//for all primitive data - Stack memory is used 
//agar koi cheez stack ke andar defined hoti h to uski ek copy milti h stack ko

let myYoutubename="AdarshCodes"

let anotherName=myYoutubename

anotherName="hellozi"
console.log(myYoutubename)
console.log(anotherName)

let user1={
    email: "user@gmail.com",
    upi: "user@sbi",
}
let user2= user1


// object internals can be accessed by "."
user2.email = "hie@gmail.com"

console.log(user1.email)
console.log(user2.email)
//while for non primitive data- Heap memory is used
// agar koi cheezheap me define dho to usse referene milti h uski