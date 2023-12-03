//1
  /* let month=prompt('Enter a month');
  let daycount;
  switch(month.toLowerCase()){
    case 'january':
    case 'march':
    case 'may':
    case 'august':
    case 'october':
    case 'december':
      daycount=31;
      break;
    case 'february':
      daycount=28;
      break;
    default:
      daycount=30
  }
  console.log(` Enter a month: ${month}\n${month.toLowerCase()} has ${daycount} days`) */
//2
let month=prompt('Enter a month');
let year=parseInt(prompt('Enter Year'))
  let daycount;
  if(year%4===0 && month.toLowerCase()==='february')
  {
    daycount=29;
  }
  else if(year%4!==0 && month.toLowerCase()==='february'){
    daycount=28
  }
  else{
  switch(month.toLowerCase()){
   
    case 'march':
    case 'may':
    case 'august':
    case 'october':
    case 'december':
      daycount=31;
      break;
    default:
      daycount=30
  }}
  console.log(` Enter a month: ${month}\n${month.toLowerCase()} has ${daycount} days`)
