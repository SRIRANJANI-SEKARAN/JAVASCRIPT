//1
  let year=parseInt(prompt('Enter birth Year'));
  console.log(typeof year);
  let age=new Date().getFullYear()-year;
  if(age>=18)
  {
    console.log(`Enter birth year: ${year}\nYou are ${age}. You are old enough to drive`)
  }
  else
  {
    console.log(`Enter birth year: ${year}\nYou are ${age}. You will be allowed drive after ${18-age} years`)
  }
//2
  let myAge = 26
  let yourAge =parseInt(prompt('Enter your age:'))
  if(myAge>yourAge)
  {
    console.log(`Enter your age: ${yourAge}\nI am ${myAge-yourAge} years older than you`)
  }
  else
  {
    console.log(`Enter your age: ${yourAge}\nYou are ${yourAge-myAge} years older than me`)
  }
//3
//3i if-else
  let a = 4
  let b = 3 
  if(a>b)
  {
    console.log(`${a} is greater than ${b}`)
  }
  else{
    console.log(`${a} is smaller than ${b}`)
  }
//3ii ternary operator
  a>b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is smaller than ${b}`)
  
//4
 let number=parseInt(prompt('Enter a number:'));
 if(number%2===0){
   console.log(`Enter a number: ${number}\n${number} is an even number`)
 }
 else{
  console.log(`Enter a number: ${number}\n${number} is an odd number`)
 }