//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortedAge=ages.sort()
console.log(sortedAge)
let minAge=sortedAge[0]
console.log(`MinAge: ${minAge}`)
//mid age
let midAge='';
if((sortedAge.length-1)%2===0) //odd
{
  midAge=sortedAge[(sortedAge.length-1)/2]
  console.log(midAge)
}
else{
  let midAge1=sortedAge[(sortedAge.length/2-1)]
  let midAge2=sortedAge[sortedAge.length/2]
  midAge=midAge1,midAge2;
  console.log(`Middle Age: ${midAge1} ${midAge2}`)
  console.log()
}
//max age
let maxAge=sortedAge[sortedAge.length-1]
console.log(`MaxAge: ${maxAge}`)

//average
let average=0;
let sum=0
for(const avg of ages){
  sum+=avg;
}
average=sum/ages.length
console.log(`Average age: ${average}`)

//max - min
let rangeOfAges=maxAge-minAge;
console.log(`Range of Ages: ${rangeOfAges}`)

//compare
//for 2 and 3 refer main.js