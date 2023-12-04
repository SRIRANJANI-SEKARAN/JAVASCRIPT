const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
//1 union
let c=[...a,...b]

let union=new Set(c)
console.log(union)

//2 intersection
let setA= new Set(a)
let setB= new Set(b)
let C=a.filter(num=>setB.has(num)) //common numbers array
let setC= new Set(C)
console.log(setC)

//3 differece
// a difference b
 let aDifferenceB= new Set(a.filter(num=>!setB.has(num)))
 console.log(aDifferenceB)

// b difference a
 let bDifferenceA= new Set(b.filter(num=>!setA.has(num)))
 console.log(bDifferenceA)

