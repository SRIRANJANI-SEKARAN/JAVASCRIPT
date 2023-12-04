//1
  let dog={}

//2
  console.log(dog)

//3
  dog.name='mani';
  dog.legs=4;
  dog.color='brown'
  dog.age=4
  dog.bark=function(){
    return 'woof woof'
  }

//4
  console.log(Object.values(dog))
  console.log(dog.bark())

  //5
   dog['breed']='German shepherd'
   dog['getDogInfo']=function(){
     console.log(dog.name)
     console.log(dog.breed)
     console.log(dog.bark())
   }
dog.getDogInfo()