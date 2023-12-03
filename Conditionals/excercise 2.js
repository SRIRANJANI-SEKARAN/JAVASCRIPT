//1
  let marks=parseInt(prompt('Enter Your Mark:'));
  if(marks>=0&&marks<=49){
    console.log(`Your mark is: ${marks}\nYour Grade: F`)
  }
  else if(marks>=50&&marks<=59){
    console.log(`Your mark is: ${marks}\nYour Grade: D`)
  }
  else if(marks>=60&&marks<=69){
    console.log(`Your mark is: ${marks}\nYour Grade: C`)
  }
  else if(marks>=70&&marks<=89){
    console.log(`Your mark is: ${marks}\nYour Grade: B`)
  }
  else if(marks>=90&&marks<=100){
    console.log(`Your mark is: ${marks}\nYour Grade: A`)
  }
//2
  let season=prompt('Enter the Month');
  if(season.toLowerCase()==='september'||season.toLowerCase()==='october'||season.toLowerCase()==='november')
  {
    console.log('The season is Autumn ')
  }
  else if(season.toLowerCase()==='december'||season.toLowerCase()==='january'||season.toLowerCase()==='february')
  {
    console.log('The season is Winter ')
  }
  else if(season.toLowerCase()==='march'||season.toLowerCase()==='april'||season.toLowerCase()==='may')
  {
    console.log('The season is Spring')
  }
  else if(season.toLowerCase()==='june'||season.toLowerCase()==='july'||season.toLowerCase()==='august')
  {
    console.log('The season is Summer')
  }
//3
  let day=(prompt('What is the day today?')).toLowerCase();
  switch(day){
    case 'saturday':
    case 'sunday':
      console.log(`What is the day today? ${day}\n${day} is a weekend`)
    break;
    /* case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday': */
    default:
    console.log(`What is the day today? ${day}\n${day} is a working day`)
    
  }
