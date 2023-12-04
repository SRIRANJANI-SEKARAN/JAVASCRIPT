//1
  function userIdGenerator(){
    let characters=prompt('Enter  any letters')
    let numbers=prompt('enter Any numbers')
    let combination=characters+numbers.toString();
    let forRandom=Math.floor(Math.random()*combination.length)
  //  console.log(forRandom) 
    let randomId=''
    for(i=0;i<5;i++){
      let randoms='';
      for(j=0;j<forRandom;j++){
      
        randoms+=combination[Math.floor(Math.random()*combination.length)] 
    }
    randomId=console.log(randoms)//displaying id one by one
  }
  // return randomId 
  }

  userIdGenerator()

//2
 function rgbColorGenerator(){
    let random='';
    let rgb=[]
    for(i=0;i<3;i++){
      rgb.push(Math.floor(Math.random()*256))
    }
    return `rgb(${rgb.join(',')})`
  }
  console.log(rgbColorGenerator())

//3
  function arrayOfHexaColors(){
    
    let arrayCode=[]
    let characters='0123456789abcdef';
    let forLoop=Math.floor(Math.random()*characters.length)
    for(j=0;j<=forLoop;j++){
      let addingHash=''
      let randomCode=''
    for(let i=0;i<6;i++){
      
      let random=Math.floor(Math.random()*(characters.length))
      randomCode+=(characters.charAt(random))
    }
    addingHash= `#${randomCode}`
    arrayCode.push(addingHash)
  }
    return arrayCode
  }
  console.log(arrayOfHexaColors()) 

//4 
  function arrayOfRgbColors(){
    let random='';
    let rgbArray=[];
    
    let forLoop=Math.floor(Math.random()*10)
      for(j=0;j<=forLoop;j++){
        let rgb=[]
    for(i=0;i<3;i++){
      rgb.push(Math.floor(Math.random()*256))
    }
    rgbArray.push(`rgb(${rgb.join(',')})`)
  }
  return rgbArray
  }
  console.log(arrayOfRgbColors())

//5
  function generateColors(colorScheme,numb){
    if(colorScheme==='rgb' && numb===1){
      let random='';
      let rgb=[]
      for(i=0;i<3;i++){
        rgb.push(Math.floor(Math.random()*256))
      }
      console.log(`rgb(${rgb.join(',')})`)
    }
    else if(colorScheme==='rgb' && numb>1){
      let random='';
      let rgbArray=[];
      
      let forLoop=Math.floor(Math.random()*10)
        for(j=0;j<numb;j++){
          let rgb=[]
      for(i=0;i<3;i++){
        rgb.push(Math.floor(Math.random()*256))
      }
      rgbArray.push(`rgb(${rgb.join(',')})`)
    }
      console.log(rgbArray)
    }
    else if(colorScheme==='hexa' && numb===1){
      let randomCode=[]
      for(let i=0;i<6;i++){
        let characters='0123456789abcdef';
        let random=Math.floor(Math.random()*(characters.length))
        randomCode.push(characters.charAt(random))
      }
      console.log(`#${randomCode.join('')}`)
    }
    else if(colorScheme==='hexa' && numb>1){
      let arrayCode=[]
      let characters='0123456789abcdef';
      //let forLoop=Math.floor(Math.random()*characters.length)
      for(j=0;j<numb;j++){
        let addingHash=''
        let randomCode=''
      for(let i=0;i<6;i++){
        
        let random=Math.floor(Math.random()*(characters.length))
        randomCode+=(characters.charAt(random))
      }
      addingHash= `#${randomCode}`
      arrayCode.push(addingHash)
    }
      console.log(arrayCode)

    }
  }
  generateColors('hexa', 3)
  generateColors('hexa', 1)
  generateColors('rgb', 3)
  generateColors('rgb', 1) 

//6 shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
      //console.log(j)

      // Swap elements at i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Example usage:

  const myArray = [1, 2, 3, 4, 5];
  shuffleArray(myArray);
  console.log(myArray); // The array is now shuffled

//7 factorail of numbers
  function factorial(numb){
    let fact=1
    for(i=1;i<=numb;i++){
      console.log(i)
      fact*=i
    }
    console.log(fact)
  }
  factorial(22)

//8
  let isEmpty=(arg)=> !Boolean(arg.length);//if array has length it returns false
  console.log(isEmpty([1])) 

//9
  function sum(){
    let args=arguments
    let sum=0
    for(i=0;i<args.length;i++){
      sum+=args[i]
    }
    return console.log(sum)
  }
  sum(1,2,3,4,-4)
  sum(1,3,4,-4) 

//10
 function sumOfArrayItems(arr){
  let sum=0
  for(i=0;i<arr.length;i++){
    if(typeof(arr[i])==='number'){
      sum+=arr[i]
    }

    else{
      console.log(`arr[${i}] element '${arr[i]}' is not a number`)
    }
}
  return sum
}
console.log(sumOfArrayItems([1,'hi',3])) 

//11
  function average(arr){
    let avg=0;
    let sum=0
    let count=0;
    for(let i=0;i<arr.length;i++){
      if(typeof(arr[i])==='number'){
        sum+=arr[i]
        count++
      }
      else{
        console.log(`arr[${i}] element '${arr[i]}' is not a number`)
      }
    }
  
    average=sum/count
    return `Average of numbers: ${average}`
  }
  console.log(average([1,3,5,5.8,'hello'])) 

//12
 let modifyArray=(arr)=> {
    if(typeof(arr[4])!=='undefined'){
      arr[4]=arr[4].toUpperCase()
     return arr
    }
    else{
      return 'Item not found'
    }
    
  }
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))
  console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon'])) 

//13
   function uniquearray(arr){
    for(i=1;i<arr.length;i++){
      for(j=0;j<arr.length;j++)
      if(arr[j]===arr[i]){
        if(i===j){
          continue
        }
        return false
    }
  }
  return true
  }
    console.log(uniquearray([1,2,5,6,7]))

//14
  function uniqueArrayType(arr){
      for(i=1;i<arr.length;i++){
        for(j=0;j<arr.length;j++)
        if(typeof(arr[j])!==typeof(arr[i]) && i!==j){
          return false
      }
    }
    return true
    }
      console.log(uniqueArrayType([1,2,5,6,7,'5'])) 

//15
function isValidVariable(vari){
  if(vari.includes('$')&&vari.includes('_')){
    return 'valid variable'
  }
  else{
    return 'not valid'
  }
}

//16
function sevenRandomNumbers(){
  let random='';
  let randomId=[];
  for(i=0;i<7;i++){
    random=Math.floor(Math.random()*10)
    if(!randomId.includes(random)){
      randomId.push(random)
    }
    else{
      i--
    }
  }
  return randomId
}
console.log(sevenRandomNumbers())

// 17 reverse country already done