//1
class animals{
  constructor(name,age,color,legs){
    this.Name=name
    this.Age=age
    this.color=color
    this.Legs=legs
  }
  fullInfo(){
    return `Name: ${this.Name}\nAge: ${this.Age}\nColor: ${this.color}\nLegs: ${this.Legs}`
  }
  get getname(){
    return this.Name
  }
}


let human= new animals('maari',35,'brown',2)
console.log(human)
console.log(human.fullInfo())
console.log(human.getname)





//2 -----------Level 2 - 1 & Level 1- 2
class dogs extends animals{
  constructor(name,age,color,legs,gender){
    super(name,age,color,legs)
    this.Genger=gender
  }
  fullInfo(){ //override method
    return `Name: ${this.Name}\nAge: ${this.Age}\nColor: ${this.color}\nLegs: ${this.Legs}\nGender:${this.Genger}`
  }
  static age(age){
    return `Updated Age:${age}`
  }
}
let dog= new dogs('mani',5,'black',4,'male')
console.log(dog)
console.log(dog.fullInfo())
console.log(dogs.age(6))

class cats extends animals{
  constructor(name,age,color,legs,gender){
    super(name,age,color,legs)
    this.Genger=gender
  }
  fullInfo(){ //override method
    return `Name: ${this.Name}\nAge: ${this.Age}\nColor: ${this.color}\nLegs: ${this.Legs}\nGender:${this.Genger}`
  }
  static age(age){
    return `Updated Age:${age}`
  }
}
let cat= new cats('miyavv',2,'white',4,'female') //class instantiation
console.log(cat)

