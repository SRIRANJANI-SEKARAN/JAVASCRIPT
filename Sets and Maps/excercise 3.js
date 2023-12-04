import{countries} from './country_data.js'
//1
let langSet= new Set()
for(let country of countries){
  for(let lang of country.languages){
    langSet.add(lang)
  }
 
}
console.log(langSet.size)

//2
function mostSpokenLanguages(country,limit){
  let uniqueLangs= new Set()
  for(const cont of country){
    for(const lang of cont.languages){
      uniqueLangs.add(lang)
    }
  }
  let langCount=[]
  for(let len of uniqueLangs){
    let filter=country.filter(cont=>cont.languages.includes(len))
    langCount.push({[len]:filter.length}); //[len] creates object property
  }
  langCount.sort((a, b) => b[len] - a[len]);
  return langCount.slice(0,limit)
  
}
console.log(mostSpokenLanguages(countries,10)) 

/* function mostSpokenLanguages(country, limit) {
  let uniqueLangs = new Set();

  for (const cont of country) {
    for (const lang of cont.languages) {
      uniqueLangs.add(lang);
    }
  }

  let langCount = [];

  for (let len of uniqueLangs) {
    let filter = country.filter(cont => cont.languages.includes(len));
    langCount.push({ [len]: filter.length }); // [len] creates object property
  }

  return langCount.sort((a, b) =>{
    let countA=a[Object.keys(a)[0]] //returns key array a[keys of a after that [0] th of a] 
    let countB=b[Object.keys(b)[0]]
    return countB-countA
  }).slice(0,limit)
  
}console.log(mostSpokenLanguages(countries,10)) */

let a=[5,4,3]
console.log(a[[1,2,3][0]])// step 1 - a[[1]] [1,2,3] 0th position 1 
//step -2 a[1]=4

 