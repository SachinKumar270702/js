const marvelHeros=["thor", "IronMan","SpiderMan"]
const dcHeros=["superman","batman","flash"]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros)
// marvelHeros.concat(dcHeros)
// console.log(marvelHeros)

// const allHeros=marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allHeros=[...marvelHeros,...dcHeros]
// console.log(allHeros)

const myArr=[1,2,3,[2,1,2],2,4,[7,6,[9,0,3]],0,5,]

// console.log(myArr.flat(Infinity))

// console.log(Array.isArray("Sachin"))
// console.log(Array.from("Sachin"))
// console.log(Array.from({name:"Sachin"}))//interesting

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))
