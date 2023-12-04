//1
  function fullname(){
    console.log('Ranjani chandrasekaran')
  }
  fullname()

//2
  function fullname(fName,lNmae){
    return fName+' '+lNmae
  }
  console.log(fullname('Ranjani','chandrasekaran'))

//3 adding numbers
  function addNumbers(a,b){
    let sum=a+b;
    return sum
  }
  console.log(addNumbers(5,3))

//4
  function areaOfRectangle(length,width){
    let area=length*width;
    return area;
  }
  console.log(areaOfRectangle(5,3))

//5 perimeter Of Rectangle
  function perimeterOfRectangle(length,width){
    let perimeter=2*(length+width);
    return perimeter;
  }
  console.log(perimeterOfRectangle(5,3))

//6 volume of prism
  function volumeOfRectPrism(length,width,height){
    let volume=length*width*height;
    return volume;
  }
  console.log(volumeOfRectPrism(5,3,2));

//7 area of circle
  function areaOfCircle(r){
    let circleArea=3.14*r**2;
    return circleArea;
  }
  console.log(areaOfCircle(2))

//8 circumference Of Circle
  function circumOfCircle(r){
    let circum=2*3.14*r;
    return circum
  }
  console.log(circumOfCircle(5))

//9 density
  function density(mass,volume){
    let density=mass/volume;
    return density;
  }
  console.log(density(5,2))

//10
  function speed(distance,time){
    let speed=distance/time;
    return speed;
  }
  console.log(speed(40,2));

//11 weight
  function weight(mass,gravity){
    let weight=mass*gravity
    return weight;
  }
  console.log(weight(60,9.81))// earth gravity=9.81m/s^2

//12
  function convertCelsiusToFahrenheit(celsius){
    let toFafrenheit=(celsius*9/5)+32;
    return toFafrenheit
  }
  console.log(convertCelsiusToFahrenheit(37));

//13
  function bmi(weight,height){
    let bmi=(weight/(height*height)).toFixed(2) //weight in kg & height in m
    if(bmi<18.5){
      console.log(`Your BMI is: ${bmi} - Underweight`)
    }
    else if(bmi>=18.5 && bmi<=24.9){
      console.log(`Your BMI is: ${bmi} - Normal weight`)
    }
    else if(bmi>=25 && bmi<=29.9){
      console.log(`Your BMI is: ${bmi} - Overweight`)
    }
    else //more than 30
    {
      console.log(`Your BMI is: ${bmi} - Obese`)
    }
  }
  bmi(80,1.6)

//14
  function checkSeason(month){
    month=month.toLowerCase()
    if(month==='march' ||month ==='april' || month==='may'){
      return `Month:${month}- Spring`
    }
    else if(month==='june' ||month ==='july' || month==='august'){
      return `Month:${month}- Summer`
    }
    else if(month==='september' ||month ==='october' || month==='november'){
      return `Month:${month}- Autumn`
    }
    else if(month==='december' ||month ==='january' || month==='february'){
      return `Month:${month}- Winter`
    }
    else{
      return 'Enter a valid Month'
    }
  }
  console.log(checkSeason('september'))

//15
  function findMax(){
    let arr=arguments;
    let max=0
    for(i=0;i<arr.length;i++){
      if(arr[i]>max){
        max=arr[i];
      }

    }
    return max
  }
  console.log(findMax(0, 10, 5))

  console.log(findMax(0, -10, -2,8))


