//1
  let firstName='Ranjani', lastName='C', country='India', city='Salem', age=22, isMarried=false;
  console.log(typeof firstName);
  console.log(typeof lastName);
  console.log(typeof country);
  console.log(typeof city);
  console.log(typeof age);
  console.log(typeof isMarried);
//2
  console.log(typeof '10'===typeof 10);
//3
  console.log(typeof parseInt('9.8')===typeof 9.8); 
//4
//4i
  console.log(3>2);
  console.log(typeof 'hii'==='string');
  let num=5;
  console.log(num===5);
//4ii
  console.log(0>2);
  console.log(typeof 5==='string');
  let numb=6;
  console.log(numb===5);
//5
  console.log(true,true,false,false,true,true,false,false,false,true,false);

//6
  console.log('python'.length !== 'jargon'.length);
//7
 console.log(true,false,true,true,false,true,true,false,true, true,false);
//8
  let date=new Date();
//8i
 console.log('Year:',date.getFullYear());//year
 console.log('Date:',date.getDate());
 console.log('Day:',date.getDay()+1);//day (0-6)
 console.log('Hours:',date.getHours())
 console.log('Minutes:',date.getMinutes())
 console.log('Seconds:',date.getTime())//from 1970 jan 1 to till now

