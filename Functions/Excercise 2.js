//1
  function printArray(arr){
    for(const array of arr){
      console.log(array)
    }
  }
  printArray([2,8,-5,6])

//2
   function showDateTime(){
    let date=new Date();
    let monthDate=(date.getDate()).toString().padStart(2,'0')
    let month=(date.getMonth()+1).toString().padStart(2,'0');
    let year=date.getFullYear()
    let hour=date.getHours().toString().padStart(2,'0')
    let minuts=date.getMinutes().toString().padStart(2,'0')
    return `${monthDate}/${month}/${year} ${hour}:${minuts}`
  }
  console.log(showDateTime())

//3
  function swapValues(a,b){
   let a=b;
    let b=a; 
    return `x => ${b}, y => ${a}`
  }
  console.log(swapValues(3,4))
  console.log(swapValues(4,5))

//4 reverse array
  function reverseArray(array){
    
    // console.log(array) 
    let newArr=[]
    for(let i=array.length-1;i>=0;i--)
    {
      
      newArr.push(array[i])
    }
    return newArr
  }
  console.log(reverseArray([1, 2, 3, 4, 5]))
  console.log(reverseArray(['A', 'B', 'C']))

//5 capitalize array
  function capitalizeArray(arr){
    let capsArray=[]
    for(i=0;i<arr.length;i++){
      let caps=arr[i]
      capsArray.push(caps.toUpperCase())
    }
    return capsArray;
  }
  console.log(capitalizeArray(['hi','hello','say']))

//6
  function addItem(arr,item){
    arr.push(item)
    return arr
  }
  console.log(addItem([1,2,3],4))

//7
  function removeItem(arr,index){
    arr.splice(index,1)
    return arr
  }
  console.log(removeItem([1,2,3,4,5],3))

//8
  function sumOfNumbers(){
    let args=arguments;
    let sum=0;
    for(i=0;i<args.length;i++){
      sum+=args[i]

    }
    return console.log(sum)
  }
  sumOfNumbers(1,2,3,4)
  sumOfNumbers(1,8,3,14)

//9 sum of odds 
function sumOfOdds(){
  let args=arguments;
    let oddSum=0;
    for(i=0;i<args.length;i++)
    {
      if(args[i]%2===1)// checking whether the number is odd
      {
        oddSum+=args[i]
      }
    }
    return console.log(oddSum)
}
sumOfOdds(1,2,3,4,5)


//10
  function sumOfEven(){
    let args=arguments;
      let evenSum=0;
      for(i=0;i<args.length;i++)
      {
        if(args[i]%2===0)// checking whether the number is odd
        {
          evenSum+=args[i]
        }
      }
      return console.log(evenSum)
  }
  sumOfEven(1,2,3,4,5,6)

//11
  function evensAndOdds(num){
    let evenCount=0;
    let oddCount=0;
    for(i=0;i<=num;i++){
      if(i%2===0){
        evenCount++
      }
      else{
        oddCount++
      }
    }
    return `The number of odds are ${oddCount}\nThe number of evens are ${evenCount}`
  }
  console.log(evensAndOdds(100))

//12
  function sum(){
    let numSum=0;
  
    for(i=0;i<arguments.length;i++){
      numSum+=arguments[i]
    }
    return console.log(numSum)
  }
  sum(1, 2, 3) 
  sum(1, 2, 3, 4) 

//13 Random userIP
  function randomUserIp(){
    let random=[]

    for(i=0;i<4;i++){
    random.push(Math.floor(Math.random()*256))
    }
    return random.join('.')
  /*  return `${random[0]}.${random[1]}.${random[2]}.${random[3]}` */
  }
  console.log(randomUserIp())

//14 Random MacAddress
function randomMacAddress(){
  let randomCode=''
  for(let i=0;i<12;i++){
    let characters='0123456789abcdef';
    let random=Math.floor(Math.random()*(characters.length))
    randomCode+=(characters.charAt(random))
    if(i%2!==0 && i<11){
      randomCode+='-'
    }
  }
  
  return `${randomCode}`
}
console.log(randomMacAddress())


//15 Random hexadecimal
  function randomHexaNumberGenerator(){
    let randomCode=[]
    for(let i=0;i<6;i++){
      let characters='0123456789abcdef';
      let random=Math.floor(Math.random()*(characters.length))
      randomCode.push(characters.charAt(random))
    }
    return `#${randomCode.join('')}`
  }
  console.log(randomHexaNumberGenerator())

//16
  function userIdGenerator(){
    let randomCode=[]
    for(let i=0;i<7;i++){
      let characters='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let random=Math.floor(Math.random()*(characters.length))
      randomCode.push(characters.charAt(random))
    }
    return `${randomCode.join('')}`
  }
  console.log(userIdGenerator())