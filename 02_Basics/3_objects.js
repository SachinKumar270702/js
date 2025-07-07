//singleton


//onject literals
const mySym=Symbol("Key1")

const jsUser={
    name:"Sachin",
    "full name":"Sachin Kumar",
    age:22,
    [mySym]:"myKey1",
    location:"New Delhi",
    email:"SachinKumar@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}


// console.log(jsUser["name"])
// console.log(jsUser["full name"])
// console.log(jsUser.email)
// console.log(jsUser[mySym])

jsUser.email="Sachin@Amazon.com"
// Object.freeze(jsUser)
jsUser.email="Sachin@chatgpt.com"
// console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello JS user")
}

jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())