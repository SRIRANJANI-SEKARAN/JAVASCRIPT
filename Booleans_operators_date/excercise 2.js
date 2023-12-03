//1 area of triangle
  let base=prompt('Enter base:','10');
  let height=prompt('Enter height:','10');
  let area=0.5*base*height;
  console.log(`Enter base: ${base}\nEnter height: ${height}\nThe area of the triangle is: ${area}`); 
//2
 let sideA=prompt('Enter side a:');
  let sideB=prompt('Enter side b:');
  let sideC=prompt('Enter side c:');
  let perimeter=parseInt(sideA)+parseInt(sideB)+parseInt(sideC);
  console.log(`Enter side a: ${sideA}\nEnter side b: ${sideB}\nEnter side c: ${sideC}\nThe perimeter of the triangle is: ${perimeter}`) 
//3
  let length=parseInt(prompt('Enter length'));
  let width=parseInt(prompt('Enter width'));
  let areaOfRect=length*width;
  let perimeterOfRect=2*(length+width);
  console.log(`Length: ${length}\nWidth: ${width}\nArea of Rectangle: ${areaOfRect}\nPerimeter of Rectangle: ${perimeterOfRect}`) 
//4
 let radius=parseInt(prompt('Enter radius'));
  let pi=3.14;
  let areaOfCircle=pi*radius**2;
  let circumferenceOfCircle=2*pi*radius;
  console.log(`Radius: ${radius}\nArea of Circle: ${areaOfCircle}\nCircumference of Circle: ${circumferenceOfCircle}`)  
//5
  let x=-3;
  let y=x**2+6*x+9;
  if(y===0)console.log(`y=0 at x=${x}`);
//6
  let hour=parseInt(prompt('Enter hours:'));
  let ratePerHour=parseInt(prompt('Enter rate per hour:'));
  let earning= hour*ratePerHour;
  console.log(`Enter hours: ${hour}\nEnter rate per hour: ${ratePerHour}\nYour weekly earning is ${earning}`); 
//7
 
  let yourName='sriranjani';
  yourName.length>7
   ? console.log('your name is long ')
   : console.log(' your name is short.');
//8
  let firstName = 'sriranjani'
  let lastName = 'chandrasekaran';
  firstName.length>lastName.length
  ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
  : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`) 
//9
  let myAge = 26
  let yourAge = 28
  myAge>yourAge
  ?console.log(`I am ${myAge-yourAge} years older than you`)
  :console.log(`You are ${yourAge-myAge} years older than me`)
//10
  let year=parseInt(prompt('Enter birth Year'));
  console.log(typeof year);
  let age=new Date().getFullYear()-year;
  age>=18
  ?console.log(`Enter birth year: ${year}\nYou are ${age}. You are old enough to drive`)
  :console.log(`Enter birth year: ${year}\nYou are ${age}. You will be allowed drive after ${18-age} years`); 
//11
  let years=parseInt(prompt('Enter number of years you live:'));
  console.log(`Enter number of years you live: ${years}\nYou lived ${years*31536000} seconds.`) 
//12
//12i
  let date=new Date();
  console.log(`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")} ${date.getHours().toString().padStart(2,0)}:${date.getMinutes().toString().padStart(2,0)}`)
//12ii
  console.log(`${date.getDate().toString().padStart(2,"0")}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getFullYear()} ${(date.getHours()).toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}`)
//12iii
  console.log(`${date.getDate().toString().padStart(2,"0")}/${(date.getMonth()+1).toString().padStart(2,"0")}/${date.getFullYear()} ${date.getHours().toString().padStart(2,0)}:${date.getMinutes().toString().padStart(2,0)}`)
 
//-------------------------EXCERCISE 3--------------------------------
  
//1
console.log(`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")} ${date.getHours().toString().padStart(2,0)}:${date.getMinutes().toString().padStart(2,0)}`)