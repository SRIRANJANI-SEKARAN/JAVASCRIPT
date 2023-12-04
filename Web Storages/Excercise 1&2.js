//localStorage.clear()

let firstName='ranjani'
localStorage.setItem('fName',firstName)
let lastName='sekaran'
localStorage.setItem('lName',lastName)
localStorage.setItem('country','India')
localStorage.setItem('city','Salem')

//console.log(localStorage)


//----------------------LEVEL 2----------------------------------------------
let student = {
  firstName: "vidhya",
  lastName: "sekaran",
  age: 23,
  skills: ["html", "css", "javascript"],
  country: "India"
}
localStorage.removeItem('fName')
localStorage.removeItem('lName')
localStorage.setItem('studentData',JSON.stringify(student))
console.log(localStorage)

console.log('ranjani')