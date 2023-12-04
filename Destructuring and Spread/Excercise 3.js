import{countries} from './country_data.js'

//1
for(let {name,capital,population,languages} of countries){
  console.log(name,capital,population,languages)
} 

//2
 const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let[name,skills,[,,jsScore, reactScore]]=student
console.log(name, skills, jsScore, reactScore) 

//3
 const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(student){
  let obj=student.map(stud=>({
    name:stud[0],
    skills:stud[1],
    scores:stud[2]
  }))
  return obj
}

console.log(convertArrayToObject(students)) 

//4
const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
//4(i - iv)
let newStudent={...student}
let keys=Object.keys(student.skills)
console.log(keys)
let newskill=[{skill: 'BootStrap',level: 8},{skill: 'Express',level: 9},{ skill: 'SQL',level: 8},'SQL']
console.log(newskill)


  for(let j=0;j<keys.length;j++){
    if(keys[j]==='frontEnd'){
      newStudent.skills.frontEnd.push(newskill[0])
    }
    else if(keys[j]==='backEnd'){
      newStudent.skills.backEnd.push(newskill[1])

    }
    else if(keys[j]==='dataBase'){
      newStudent.skills.dataBase.push(newskill[2])
    }
    else if(keys[j]==='dataScience'){
      newStudent.skills.dataScience.push(newskill[3])
    }
  } 


/* let newStudent={...student}
let keys=Object.keys(student.skills)
console.log(keys)
let newskill=[{skill: 'BootStrap',level: 8},{skill: 'Express',level: 9},{ skill: 'SQL',level: 8},'SQL']
console.log(newskill)
      newStudent.skills.frontEnd.push(newskill[0])
      newStudent.skills.backEnd.push(newskill[1])
      newStudent.skills.dataBase.push(newskill[2])
      newStudent.skills.dataScience.push(newskill[3])
   

console.log(newStudent) */

/* const newskill = [
  { skill: 'BootStrap', level: 8 },
  { skill: 'Express', level: 9 },
  { skill: 'SQL', level: 8 },
  'SQL',
];

const skillsMapping = {
  frontEnd: 0,
  backEnd: 1,
  dataBase: 2,
  dataScience: 3,
};

const newStudent = { ...student };

Object.keys(newStudent.skills).forEach(key=>{
  newStudent.skills[key].push(newskill[skillsMapping[key]])
}) */

console.log(newStudent);


/* let skillFront=student.skills.frontEnd
skillFront.push({skills:'Bootstrap',level:8})
let [fskill1,fskill2,fskill3,fskill4,fskill5]=skillFront
console.log(skillFront)

let skillBack=student.skills.backEnd
skillBack.push({skills:'Express',level:9})
console.log(skillBack)

let db=student.skills.dataBase
db.push({skills:'Sql',level:8})
console.log(db)

let updateDS=student.skills.dataScience
updateDS.push('SQL')
console.log(updateDS)

let fullDetails=`{
  Name:${student.name}
  Age:${student.age}
  Skills:{
    frontEnd:[{skills:${fskill1.skill},level:${fskill1.level}}]
  }
}`

console.log(fullDetails) */