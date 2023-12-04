//-------------------LEVEL 1--------------------------------------------
//1
function outer(x){
  function inner(y){
    return x+y
  }
  return inner
}
const inner=outer(3)
//x(5)//passing 3 to inner(3)
console.log(inner(5)) 

/*  function outer(x){
  return function inner(y){
    return x*y
  }
}
let inner=outer(3)//storing inner function that is return value of outer fnction
console.log(inner(20)) 
 
//-----------------------LEVEL 2----------------------------------------------------------------------------------------------------------------
/* function outer(fName){
  return function inner1(lName){
    return function inner2(age){
      function fullDetails(){
        return `First Name: ${fName}\nLast Name: ${lName}\nFull Nmae: ${fName} ${lName}\nAge: ${age}`
      }
      return fullDetails()
    }
  }
  
}
let inners=outer('ranjani')('sekaran')(22);
console.log(inners) */

function outer(a){
  return function inner1(b){
    return function inner2(c){
      return function inner3(d){
          return a+b+c+d
      }
     
    }
  }
}

let sum=outer(2)(3)(4)(5)// passing arguments to inner functions
console.log(sum)