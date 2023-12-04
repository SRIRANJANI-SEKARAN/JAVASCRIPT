// 1
 let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id='';
  let randomId=[];
  let n=Math.floor(Math.random()*characters.length)
  // console.log(n); 
  for(i=0;i<n;i++){
    id=Math.floor(Math.random()*characters.length)
    randomId.push(characters.charAt(id))
  }
  let idCode=randomId.join('');
  console.log(idCode)
//2
  let characters='0123456789ABCDEF'
  let id='';
  let randomId=[];
  for(let i=0;i<6;i++){
    id=Math.floor(Math.random()*characters.length)
    randomId.push(characters.charAt(id))
  }
  let idCode=randomId.join('');
  console.log(`#${idCode}`)
//3
  let id='';
  let randomId=[];
  for(let i=0;i<3;i++){
    id=Math.floor(Math.random()*256)
    randomId.push(id)
  }
  let idCode=randomId.join(',');
  console.log(`rgb(${idCode})`)

//4
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newCountries=[];
  for(let i=0;i<countries.length;i++){
  newCountries.push(`${countries[i].toUpperCase()}`);
  }
  console.log(newCountries)

//5
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newCountries=[];
  for(let i=0;i<countries.length;i++){
  newCountries.push(`${countries[i].length}`);
  }
  console.log(newCountries)

//6
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let newCountry=[]
for(i=0;i<countries.length;i++){
  let country=countries[i];
  let first3=country.slice(0,3).toUpperCase();
  let len=country.length
  newCountry.push([country,first3,len])

}
console.log(newCountry)


//7
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let land=[];
  for(const country of countries){
    if(country.includes('land')){
      land.push(country)
    }
  }
  console.log(land)

//8
  let iaCountries=[];
  for(const country of countries){
    if(country.slice(country.length-2)=='ia'){
      iaCountries.push(country)
    }
  }
  console.log(iaCountries)

//9
  let lenCountry=[];
  let j='';
  let index;
  let maxCountry='';
  for(let i=0;i<countries.length;i++){
    lenCountry.push(countries[i].length)
  }
   j=Math.max(...lenCountry)
    maxCountry=countries[lenCountry.indexOf(j)]
  console.log(maxCountry)


//10
  let fiveLetterCountry=[];
  for(let i=0;i<countries.length;i++){
    if(countries[i].length===5){
      fiveLetterCountry.push(countries[i])
    }
    
  }
  console.log(fiveLetterCountry)

//11
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let lenTech=[];
  let j='';
  let index;
  let maxTech='';
  for(let i=0;i<webTechs.length;i++){
    lenTech.push(webTechs[i].length)
    j=Math.max(...lenTech)
    maxTech=webTechs[lenTech.indexOf(j)]
  }
  console.log(maxTech)
 

//12
  let singleArray=[];
  for(const techs of webTechs){
    let technologies=techs;
    let lenTechs=technologies.length
    singleArray.push([technologies,lenTechs])
  }
  console.log(singleArray);

//13
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  let firstStack='';
  for(const stack of mernStack){
    firstStack+=stack.slice(0,1);
  }
  console.log(firstStack)


//14
  for(let i=0;i<webTechs.length;i++){
    console.log(webTechs[i])
  }
  for(const techs of webTechs){
    console.log(techs)
  }

//15
  let fruits = ['banana', 'orange', 'mango', 'lemon'];

  for (let i = 0; i < fruits.length; i++) {
    fruits[i] = fruits[fruits.length - (i + 1)];
  }

  console.log(fruits);

  //---------------------OR-------------------------------------------------
  let reverseArray=[];
  for(i=fruits.length-1;i>=0;i--){
    reverseArray.push(fruits[i])
  }console.log(reverseArray)

//16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
let fullTechs='';
for(let i=0;i<fullStack.length;i++){
  for(let j=0; j<fullStack[i].length;j++){
    console.log(fullStack[i][j]) //i first array index j inner array index
  }
  
}
