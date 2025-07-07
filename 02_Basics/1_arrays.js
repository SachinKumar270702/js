const myArr=[0,1,2,3,4,5]
const myHeros=["Shaktiman","SuperMan","Batman"]
const myArr2=new Array(1,2,3,4,5)
// console.log(myArr[3])

//Array Methods

// myArr.push(6)
// myArr.push(381)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(281)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))

//slice,splice

console.log("A",myArr)

const myn1=myArr.slice(0,3);
console.log("new arr after slice: ",myn1)
console.log("B",myArr)

const myn2=myArr.splice(0,3);
console.log("new arr after splice: ",myn2)
console.log("C",myArr)

myArr.push(7)
console.log(myArr)