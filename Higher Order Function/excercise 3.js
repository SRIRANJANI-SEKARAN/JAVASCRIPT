import {countries} from "./country_data.js";
   countries.sort(function(a,b){return a.population-b.population})
  console.log(countries) 

     countries.sort(function(a,b){return a.capital.localeCompare(b.capital)}); //sort by capital
    console.log(countries)
 

    //2 10 most spoken language
    // Your output should look like this
 function mostSpokenLanguages(naadu, length){
  let languageCount={};
  naadu.forEach(country=> { //object extraction
    country.languages.forEach(lang=> //language array extraction
      {
      if(!languageCount.hasOwnProperty(lang)){
        languageCount[lang]=1 
      }
      else{
        languageCount[lang]++
      }
    })} //o/p for languageCount will be{english:91,tamil:2}like this
    )
   let langArr=Object.keys(languageCount).map(lang=>({
     Language:lang,
     count:languageCount[lang]
   }))// objects to array of objects ()is must 
   let sortedLangarr=langArr.sort((a,b)=>b.count-a.count)
    let sortedLangarr=langArr.sort((a,b)=>{if(a.count!==b.count){
     return b.count-a.count
   }
  else{
    return a.country.localeCompare(b.country)
  }
  }) 

   return sortedLangarr.slice(0,length)
}
console.log(mostSpokenLanguages(countries,10))
console.log(mostSpokenLanguages(countries,3)) 


//3
 function mostPopulatedCountries(country,length){
  let population=country.map(count=>({
    country:count.name,
    Population:count.population
  }))
  population.sort((a,b)=>b.Population-a.Population)
  return population.slice(0,length)
}
 console.log(mostPopulatedCountries(countries,10))
 console.log(mostPopulatedCountries(countries,3)) 

 //4
 const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
 let statistics={
   count:function(){
     return ages.length
   },
   sum:function(){
     return ages.reduce((acc,crr)=>acc+crr,0)
   },
   min:function(){
    let sort=ages.sort((a,b)=>a-b)
    return sort[0]
   },
   max:function(){
    let sort=ages.sort((a,b)=>a-b)
    return sort[sort.length-1]
   },
   range:function(){
     let range=this.max()-this.min()
     return range
   },
   mean:function(){
    let meanOfNo=this.sum()/ages.length
    return meanOfNo
   },
   median:function(){
     let sort=ages.sort((a,b)=>a-b)
     return sort[(sort.length-1)/2]
   },
   mode:function(){
     let repeat={}
     ages.forEach(age=>{
      if(!repeat.hasOwnProperty(age)){
       repeat[age]=1
      }
      else{repeat[age]++}
     })
     let mode=Object.keys(repeat).map(ages=>({
       mode:ages,
       count:repeat[ages]
     }))
     mode.sort((a,b)=>b.count-a.count)
     return mode
   },
   var:function(){
    let varian=ages.reduce((acc,crr)=>acc+((crr-this.mean())**2), 0)
    return varian/ages.length 
   },
   std:function(){
     return Math.sqrt(this.var()).toFixed(1)
   },
   freqDist:function(){
     let freq={}
     ages.forEach(age=>{
       if(!freq.hasOwnProperty(age)){
         freq[age]=1
       }
       else{freq[age]++} //counting
     }
     )
      let freqData=Object.entries(freq).map(([key,value])=>
       [key,value]
     )
     /* const freqData = Object.entries(freq).map(([key, value]) => [Number(key), value]); */

     
     return freqData.sort((a,b)=>b[1]-a[1])
   }
 }

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2

console.log('Frequency Distribution: ',statistics.freqDist()) /* [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]  */


