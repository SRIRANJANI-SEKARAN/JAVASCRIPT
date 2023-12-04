//1
let personAccount={
  firstName:'Ranjani',
  lastName:'Sekaran',
  incomes:{
    salary:30000,
    rentIncome:5000,
    smallBusiness:5000
  },
  expenses:{
    food:3000,
    travelling:5000,
    others:10000
  },
  totalIncome: function(){
    let totalIncome=0
    for(let eachincome of Object.keys(this.incomes))//it gives all income key values as array
     {
      totalIncome+=this.incomes[eachincome]//accessing every indexed income in incomes object
    }
    return totalIncome
  },
  totalExpense: function(){
    let totalExpense=0
    for(const eachExpence of Object.keys(this.expenses)){
      totalExpense+=this.expenses[eachExpence] //getting each expence value
    }
    return totalExpense
  },
 
  addIncome:function(name,cost){
    this.incomes[name]=cost
    return this.incomes
  },
  addExpense:function(name,cost){
    this.expenses[name]=cost
    return this.expenses
  },
  accountInfo: function(){
    return `Account Holder Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expence: ${this.totalExpense()}`
  },
  accountBalance:function(){
    let totaltBalance=0;
    totaltBalance=this.totalIncome()-this.totalExpense()
    return totaltBalance
  }
}
console.log(personAccount.addIncome('teaching',5000))
console.log(personAccount.totalIncome())
console.log(personAccount.addExpense('Entertainment',5000))
console.log(personAccount.totalExpense())
console.log(personAccount.accountBalance()) 

//2
const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];
//2a
function signUp(user)
{
  for(const oldUser of users){
    if(user._id!==oldUser._id){
      users.push(newUser)
      return users
    }
    
    else{
      return `User already exist`
    }
  }
  
}
let newUser=  {
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
} 
/* {
  _id: 'ran29jani',
  username: 'Ranjani',
  email: 'ran@jani.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false

}  */

let newUserArr=[...users]
function signUp(newuser){
  let newUserCheck=newUserArr.some(user=> user._id===newuser._id
  )// some only return boolean , that is stored in newUserCheck
  console.log(newUserCheck)
  
  if(!newUserCheck){
   newUserArr.push(newUser)
   return newUserArr 
  }
  else{
    return `Hey! ${newUser.username}, you already have an  Account`
  }
}
//console.log(signUp(newUser))

//b signin
let newUser=[...users]
let existUser= {
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
} 
function signIn(user){
  let accuntHolder=newUser.some(holder=>(holder.email===user.email &&holder.password===user.password))
  if(accuntHolder){
    return `Hey! ${user.username}, You have Successfully signed in`
  }
  else{
    return `Hey! ${user.username} SORRY, You did not have an account`
  }
}
console.log(signIn(existUser)) 

//------------------------------------------------------------------------------

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  ]

//3 rate product
let newProduct=[...products]
  function rateProduct(productName,ratings){
    newProduct.forEach(function(product){
      if(product.name===productName){
        product.ratings.push(ratings)
      }
      else{
        'product not available'
      }
    }
    )
    return newProduct
  }

let userRating1={
  userId: 'fg12cy', rate: 5
}
let userRating2={
  userId: 'ran29jani', rate: 4.5
}
//let user=Object.keys(newProduct)
console.log(rateProduct('Laptop',userRating1))
console.log(rateProduct('Laptop',userRating2)) 

//3b average rating
function averageRating(productName){
  let avgOfRating=0
  newProduct.forEach(product=>{
    if(product.name===productName && product.ratings.length>0)
  {
    let rating=[]
    product.ratings.forEach(eachRate=>rating.push(eachRate.rate))
    //ratings array
    console.log(rating)
    let sum=0
    rating.forEach(rate=>{
      sum+=rate //ratingssum
    }
    )
    avgOfRating=sum/rating.length
  }
  else if(product.ratings.length===0 && product.name===productName){
    avgOfRating='This product is not yet rated'
  }
  else if (avgOfRating===0) {
    avgOfRating='Not a valid product'
  }  
  }
  )
  return avgOfRating
}
console.log(averageRating('Laptop'))  // if we have multiple product in same name create isproduct availabe var and set it to true at end of avg calculation inside foreach loop and brings other conditional statements outside first forEach

//4
function likeProduct(productName,likedUser){
  newProduct.forEach(eachProduct=>{
    if(eachProduct.likes.length===0 && productName===eachProduct.name){
      eachProduct.likes.push(likedUser)
    }
    else if(eachProduct.likes.length!==0 && productName===eachProduct.name)
    {
      eachProduct.likes.pop()
      /* eachProduct.likes.push(likedUser) */
    }
  })
  return newProduct
}
console.log(likeProduct('TV','ranjani'));