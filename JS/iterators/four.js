const myobj={
    js: 'javascipt',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobj) {
   console.log(`${key} shortcut is for ${myobj[key]}`)
}



const programming=["js","cpp","java","python","rb"]

for (const key in programming) {
    //console.log(key)   //index vlaueaa rhi h

    console.log(programming[key])
}



const map=new Map()
map.set('IN',"india")
map.set('USA',"united sattes of america")
map.set('FR',"frace");
map.set('IN',"india")


//map ke upar aee iterations nhi kiya ja sakta
for (const key in map) {
    console.log(key)
}

