//1
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
.then(resourse=>resourse.json())//getting promise
.then(countries=>{ //countries array
  countries.forEach(country=>{
    let language=country.languages.map(language=>language.name)
    console.log(`COUNTRY: ${country.name}\n    CAPITAL: ${country.capital}\n    LANGUAGES: ${language}\n    POPULATION: ${country.population}\n    AREA: ${country.area}`)
  })
})//getting data

//------------------------------LEVEL 2------------------------------
//1
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
async function cats(){
 try{ 
  let cat=await fetch(catsAPI)//fetching api url
  let catData=await cat.json()
  let catNames=''
  catData.forEach(cats=>{catNames+=`CAT NAME:${cats.name}\n`})
  console.log(catNames)
}
catch(error){
  console.log(`Error Message: ${error}`)
}
}
cats()