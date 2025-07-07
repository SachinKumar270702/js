let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)

// let myCreatedDate= new Date(2025,0,27)
// let myCreatedDate= new Date(2025,0,27,5,3)
// let myCreatedDate= new Date("2025-07-06")
let myCreatedDate= new Date("07-06-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// let diff=myTimeStamp-myCreatedDate
// console.log(Math.floor(diff/3600000));

let newDate=new Date()

// console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday:'long'
})
console.log(newDate.toLocaleString.weekday)