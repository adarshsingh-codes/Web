const myNums=[1,2,3,4,5,6,7,8,9,10]


//map bhi call back fucnton h
//const newNums=myNums.map( (num)=>num+10)

const newNums=myNums
                .map((num)=> num * 10 )//yha se jo value ayegi 
                .map((num)=>num+1)  //ye whi value pe continue krega apna kaam

console.log(newNums) 

