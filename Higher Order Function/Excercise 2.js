import {countries} from './countries.js'
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1
  let priceSum=products.filter(product=>typeof product.price==='number').map(product=>product.price).reduce((acc,crr)=>acc+crr,0)
  console.log(priceSum)

//2
  let priceSumWithReduce=products.reduce((acc,crr)=>{ //extracting price array
    if(typeof crr.price==='number'){
      acc.push(crr.price)
    }
    return acc
  },[]).reduce((acc,crr)=>acc+crr,0)
  console.log(priceSumWithReduce)

//3
function categorizeCountries(country){
  let landCountries=country.filter(count=>count.toUpperCase().includes('LAND'));
 
  let countriesEndsWithia=country.filter(count=>count.endsWith('ia'));
  let islandCountries=country.filter(count=>count.toUpperCase().includes('ISLAND'))
  let stanCountries=country.filter(count=>count.toUpperCase().includes('STAN'))
  return {
    landCountries,countriesEndsWithia, stanCountries
  }
}
console.log(categorizeCountries(countries));


/* function categorizeCountries(country) {
  let landCountries = country.filter(count => count.toUpperCase().includes('LAND'));
  return landCountries;
}

//4
console.log(categorizeCountries(countries)); */
  function alphabetCount(country){
    let arrayObject=[]
    let aCountry=country.filter((count)=>count.toUpperCase().startsWith('A'))
    arrayObject.push({letter:'a',length:aCountry.length})
    let bCountry=country.filter((count)=>count.toUpperCase().startsWith('B'))
    arrayObject.push({letter:'b',length:bCountry.length}) //continue this till Z
    return arrayObject

  }
  console.log(alphabetCount(countries))

//5
  function getFirstTenCountries(country){
    let tenCountries=country.slice(0,10)
    return tenCountries

  }
  console.log(getFirstTenCountries(countries))

  //6
  function getLastTenCountries(country){
    let tenCountries=country.slice(country.length-10)
    return tenCountries

  }
  console.log(getLastTenCountries(countries))
  