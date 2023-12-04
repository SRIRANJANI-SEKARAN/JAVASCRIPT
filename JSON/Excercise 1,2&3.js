//1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

let skillJson=JSON.stringify(skills)
console.log(skillJson)

//2
let age = 250;
let ageString=JSON.stringify(age)
console.log(ageString)//250 as string

//3
let isMarried = true
let isMarriedString=JSON.stringify(isMarried)
console.log(isMarriedString)

//4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
let studentString=JSON.stringify(student,null,2)
console.log(studentString)

//-------------------------------LEVEL 2-------------------------------
//1
let stuString=JSON.stringify(student,['firstName','lastName','skills'],2)
console.log(stuString)


//----------------------------LEVEL 3------------------------------------
//1
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
let objectTxt=JSON.parse(txt)
console.log(objectTxt)

//2
let max=0
let maxSkilled=''
let key=Object.keys(objectTxt).forEach(student=>{
  if(objectTxt[student].skills.length>max){
    max=objectTxt[student].skills.length
    maxSkilled=student
  }
 return `${maxSkilled} is most Skilled person` 
})
console.log(maxSkilled)

// object iteration object.key().forEach