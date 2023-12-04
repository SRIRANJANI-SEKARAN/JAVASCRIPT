//1
let emptySet=new Set()

//2
let tenSet=new Set();
for(let i=1;i<11;i++){
  tenSet.add(i)
}
console.log(tenSet)

//3
tenSet.delete(10)
console.log(tenSet)

//4
tenSet.clear()
console.log(tenSet)

//5
let numArr=['one','two','three','four','five']
let numSet= new Set(numArr)
console.log(numSet)

//6
const countries = ['Finland', 'Sweden', 'Norway']
let mapCountry= new Map()
for(let country of countries){
  mapCountry.set(country,country.length)
}
console.log(mapCountry)