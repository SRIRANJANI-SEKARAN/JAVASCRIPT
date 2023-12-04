//1
  for(let i=0;i<=10;i++){
    console.log(i);
  }
  let i=0;
  while(i<=10){
    console.log(i);
    i++;
  }
  let j=0
  do{
    console.log(j);
    j++;
  }
  while(j<=10)
//2
  for(let i=10;i>=0;i--){
    console.log(i);
  }
  let i=10;
  while(i>=0){
    console.log(i);
    i--;
  }
  let j=10
  do{
    console.log(j);
    j--;
  }
  while(j>=0)
//3
 let n=5;
 for(let i=0;i<=n;i++){
   console.log(i);
 }
//4
  let n='#';
  for(let i=0;i<=7;i++){
    console.log(n.repeat(i));
  }
//5
  for(let i=0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`)
  }
//6
  console.log('i\ti^2\t i^3');
  for(let i=0;i<=10;i++){
    console.log(`${i}\t${i**2}\t ${i**3}`)
  }
//7
  for(let i=0;i<=100;i++){
    if(i===0){
      continue
    }
    if(i%2===0){
      console.log(i);
    }
  }
//8
  for(let i=0;i<=100;i++){
    if(i===0){
      continue
    }
    if(i%2===1){
      console.log(i);
    }
  }
//9 prime numbers
function isPrime(number){
  if (number <= 1){
    return false
  }
  for ( let i = 2; i <= Math.sqrt(number); i++){
    if (number % i === 0){
      return false
    }
  }
  return true
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(13))
console.log(isPrime(15))
//10
  let sum=0;
  for(let i=0;i<=100;i++){
    sum+=i;
  }
  console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11
  let sumEven=0;
  let sumOdd=0;

  for(let i=0;i<=100;i++)
  {
    if(i%2===0){
      sumEven+=i;
    }
    if(i%2===1){
      sumOdd+=i;
    }
  }
  console.log(`The sum of all evens from 0 to 100 is ${sumEven}.\n And the sum of all odds from 0 to 100 is ${sumOdd}.`)
//12
  let sumEven=0;
  let sumOdd=0;
  let sumArr=[];
  for(let i=0;i<=100;i++)
  {
    if(i%2===0)
    {
    sumEven+=i;
    }
    if(i%2===1)
    {
    sumOdd+=i;
    }
  }
  sumArr.push(sumEven);
  sumArr.push(sumOdd);
  console.log(sumArr);
//13
  let random;
  for(let i=0;i<5;i++){
    random=Math.random();
    console.log(random);
  }
//14
  let random;
  let randomUnique=[];
    for(let i=0;i<5;i++){
      random=Math.random()
      if(!randomUnique.includes(random)){
        randomUnique.push(random);
      }
    }
    console.log(randomUnique);
//15
let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let id='';
let randomId=[];
for(i=0;i<6;i++){
  id=Math.floor(Math.random()*characters.length)
  randomId.push(characters.charAt(id))
}
let idCode=randomId.join('');
console.log(idCode)