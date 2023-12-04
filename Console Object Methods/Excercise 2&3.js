
//-------------------------LEVEL 2---------------------------------
//1
console.assert(10 > 2*10,'10 is not greater than 10*2=20')

//2
console.warn('This is a warning message')
//3
console.error('This is a error message')

//-------------------------LEVEL 3-----------------------------------
//1
console.time('while loop')
let i=1;
while(i<3){
  console.log(i)
  i++
}
console.timeEnd('while loop')

console.time('For Loop')
for(let i=1;i<3;i++){
  console.log(i)
}
console.timeEnd('For Loop')

console.time('for of loop')
let j=[1,2]
for(let i of j){
 console.log(i)
}
console.timeEnd('for of loop')

console.time('forEach loop')
j.forEach(i=>console.log(i))
console.timeEnd('forEach loop')

