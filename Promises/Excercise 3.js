
//1
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
async function cats(){
  try{
    let cat=await fetch(catsAPI)
    let catsData=await cat.json();
    catsData.forEach(cat=>{
      let weightString=cat.weight.metric
      let numWeight=weightString.match(/\d+/g)
      let eachWeightSum=numWeight.reduce((acc,crr)=>acc+(parseInt(crr)),0)
      let avgWeight=eachWeightSum/numWeight.length
      console.log(`Cat Name: ${cat.name}\n  Average Weight: ${avgWeight}`)
      
    })

  }
  catch(err){
    console.log(err)
  }
}
cats()

//2
const countriesAPI = 'https://restcountries.com/v2/all'
async function countries(limit){
  try{
    let country=await fetch(countriesAPI)
    let countryData=await country.json()
    let population=countryData.map(country=>({
      Country:country.name,
      Population:country.population
    }))
    let sorted=population.sort((a,b)=>b.Population-a.Population
    )
    console.log(sorted.slice(0,limit))

  }
  catch(error){
    console.log(error)
  }
}
countries(10)

//3
const countriesAPI = 'https://restcountries.com/v2/all'
async function officialLang(){
  try{
    let countries=await fetch(countriesAPI);
    let countriesData=await countries.json()
    let languages=[]
    countriesData.forEach(countries=>{
      countries.languages.forEach(lang=>{languages.push(lang.name)})
    })
    let uniqueLangs= new Set(languages)
    let sorted=Array.from(uniqueLangs).sort()//array.from() converts object into array, we cant sort object directly using sort()method
    //let sortedObject=new Set(sorted) //converting sorted array into object
    
    console.log(sorted.length)//.size gives the length of set 
    sorted.forEach(languages=>console.log(languages))
  }
  catch(err){
    console.log(err)
  }
}
officialLang()