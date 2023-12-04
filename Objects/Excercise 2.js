const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//1
 let max=0
  let maxskilled={}
  for(const user of Object.keys(users))//get keys(users) as array and loop through
  {
    if(users[user].skills.length>max){
      max=users[user].skills.length
    } 
    if(users[user].skills.length===max){
      maxskilled=users[user] //assigning max skilled person details into maxskilled object
    }
  }

  console.log(maxskilled)

//2 counting logged in users
  let count=0;
  let pointsCount=0
  for(const user of Object.keys(users)){
    if(users[user].isLoggedIn){
      count++
    } 
    if(users[user].points>=50){
      pointsCount++
    }
  }
  console.log(`Number of users logged in ${count}`)
  console.log(pointsCount)

//3 finding mern stack developers
  let mern='MongoDB,Express,React,Node'
  let dev=[]
  for(const user of Object.keys(users)){
    if(users[user].skills.join(',').includes(mern)){
      dev.push(user)
      
    }
  }
  console.log(`MERN stack developers are ${dev.join(',')}`)
 

//4 set my name without modifying users object
  let newUser=Object.assign({},users)
  newUser.Ranjani={
    email: 'ranjani@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 22,
      isLoggedIn: false,
      points: 50
  }
  console.log(newUser) 

//5 Get all keys or properties of users object
  let keys=Object.keys(users)
  console.log(keys)

//6Get all the values of users object
let values=Object.values(users)
console.log(values)


