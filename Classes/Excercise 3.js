//1
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
 class Statitic{
   constructor(age){
     this.ages=age
   }
   describe(){
//count
     let count=this.ages.length
//sum
     let sum=this.ages.reduce((acc,crr)=>acc+=crr,0)
//min
     let min=this.ages[0]
     this.ages.forEach(age=>{
       if(age<min){
         min=age
       }
       return min
     })
//max
     let max=0
     this.ages.forEach(age=>{
      if(age>max){
        max=age
      }
      return max
    })

     /* this.ages.sort((a,b)=>b-a)
     let max=this.ages[0] */
//range
    let range=max-min

//mean (average)
    let mean=sum/this.ages.length

//median
    this.ages.sort((a,b)=>a-b)
   let median=this.ages[((this.ages.length)-1)/2]
   

//mode
    let modeObject={}
    let mode=[]
    
    this.ages.forEach(age=>{
      
        if(!modeObject.hasOwnProperty(age))
        {
          modeObject[age]=1 
        }
        else if(modeObject.hasOwnProperty(age)){
          modeObject[age]++
        }
    mode=Object.keys(modeObject).map(key=>({
      Mode:key,
      Counts:modeObject[key]
    }))
    })
    mode.sort((a,b)=>b.Counts-a.Counts)
    let modes=JSON.stringify(mode[0])
//variance
    let varian=this.ages.reduce((acc,crr)=>acc+((crr-mean)**2), 0)
    let variance =(varian/this.ages.length).toFixed(2)

//stansard deciation
    let stdDev=Math.sqrt(variance).toFixed(1)

//Frequency Distribution:
    console.log(mode)
    let freq=[]
    mode.forEach(key=>{freq.push([key.Mode,key.Counts])})
    freq.sort((a,b)=>a[1]-b[1])
    let freqDist=JSON.stringify(freq)
    


     return `Count: ${count}\nSum: ${sum}\nMin: ${min}\nMax: ${max}\nRange: ${range}\nMean: ${mean}\nMedian: ${median}\nMode: ${modes}\nVariance: ${variance}\nStandard Deviation: ${stdDev}\nFrequency Distribution: ${freqDist} `
   }
 }
 let statistics= new Statitic(ages)
 console.log(statistics.describe())