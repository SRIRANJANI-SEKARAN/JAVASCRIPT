const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','England']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
function sum(number){
 return number*2
}
//1 foreach
let sums=[]
numbers.forEach(no=>
 sums.push(sum(no)) )
console.log(sums) 

//2 map
let sums=numbers.map(no=>
 (sum(no)) )
console.log(sums)

//2 reduce
  let reducedArr=numbers.reduce((acc,crr)=>{acc.push(sum(crr));
  return acc},[])
  console.log(reducedArr)


//3
  countries.forEach(couuntry=>console.log(couuntry))
//4
  names.forEach(name=>console.log(name))
//5
  numbers.forEach(no=>console.log(no))
//6
  let upperCaseCountry=countries.map(country=>country.toUpperCase())
  console.log(upperCaseCountry)
//7
  let countryLength=countries.map(country=>country.length)
  console.log(countryLength)
//8 
  let squareNumber=numbers.map(num=>num*num)
  console.log(squareNumber);
//9
  let upperCaseNames=names.map(country=>country.toUpperCase())
  console.log(upperCaseNames)
//10
  let productPrice=products.map(product=>{return `${product.product}:${product.price}`})
  console.log(productPrice)
//11
  let landCountries=countries.filter(country=>country.toLowerCase().includes('land'))
  console.log(landCountries)
//12
  let sixLetterCountries=countries.filter(country=>country.length===6)
  console.log(sixLetterCountries);
//13
  let sixOrMoreLetterCountries=countries.filter(country=>country.length>=6)
  console.log(sixOrMoreLetterCountries);
//14 
  let countryStartsWithE=countries.filter(country=>country.toUpperCase().startsWith('E'))
console.log(countryStartsWithE);
//15
  let productWithPrice=products.filter(product=>typeof product.price==='number')
console.log(productWithPrice)
//15 another method
    let priceOnly=products.filter(product=>typeof product.price==='number')
    .map(product=>product.price)
  console.log(priceOnly) //filter out object with prices, then extracts prices only from object

//16 
    let mixedArray=['hi','hello',true,3,'ranjani']
    let stringArr=mixedArray.filter(element=>typeof element==='string')
    console.log(stringArr)

//17
  let sumArr=numbers.reduce((acc,crr)=>acc+crr,0)
  console.log(sumArr)

//18
  let countryString=countries.reduce((acc,crr,index)=>{
    if(index===0)//first country
    {
      return crr
    }
    else if(index>0)//middle countries
    {
      return acc+','+crr

    }
    else if(index===countries.length-1)//last country
    {
      return acc+'and'+crr
    }
  },''
  )+ ' are north European countries'
  console.log(countryString)

//19 Explain the difference between some and every
//20
  let someCheck=names.some(name=>name.length>7)
  console.log(someCheck)

//21
  let landCheck=countries.every(country=>country.includes('land'))
  console.log(landCheck);

//22 Explain the difference between find and findIndex
//23
  let firstSixLetterCountry=countries.find(country=>country.length===6)
  console.log(firstSixLetterCountry);
//24
  let first6LetterCountryIndex=countries.findIndex(country=>country.length===6)
  console.log(first6LetterCountryIndex);

//25
  let findNorway=countries.findIndex(country=>country==='Norway')//if it doesnt exist it returns -1 automatically
  console.log(findNorway);

//26
  let findRussia=countries.findIndex(country=>country==='Russia')
  console.log(findRussia);










