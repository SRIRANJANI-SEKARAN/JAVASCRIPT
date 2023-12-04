//1 -4
  let array=[];
  let arrValue=[1,2,3,4,5,6,8];
  console.log(arrValue.length)
  let first=arrValue[0]
  let middle=arrValue[(arrValue.length-1)/2]
  let last=arrValue[arrValue.length-1]
  console.log(first,middle,last)

//5
  let mixedDataTypes=['hi',5,[1,2],true,null,NaN]
  console.log(mixedDataTypes.length)

//6-9
  let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
  console.log(itCompanies)
  let firstCompany=itCompanies[0];
  let middleCompany=itCompanies[(itCompanies.length-1)/2];
  let lastCompany=itCompanies[itCompanies.length-1];
  console.log(firstCompany,middleCompany,lastCompany)

//10
  console.log(itCompanies[0])
  console.log(itCompanies[1])
  console.log(itCompanies[2])
  console.log(itCompanies[3])
  console.log(itCompanies[4])
  console.log(itCompanies[5])
  console.log(itCompanies[6])

//11
  console.log(itCompanies[0].toUpperCase())
  console.log(itCompanies[1].toUpperCase())
  console.log(itCompanies[2].toUpperCase())
  console.log(itCompanies[3].toUpperCase())
  console.log(itCompanies[4].toUpperCase())
  console.log(itCompanies[5].toUpperCase())
  console.log(itCompanies[6].toUpperCase())

//12
  let string=itCompanies.toString();//converting array to strings
  console.log(`${string} are big IT companies`)   

//13
  if(itCompanies.includes('Infosys')){
    console.log('Infosys')
  }
  else{
    console.log('not found')
  }

//14
 let filteredCompanies = [];

  for (let i = 0; i < itCompanies.length; i++) {
      let companyName = itCompanies[i];
      let oCount = 0;

      for (let j = 0; j < companyName.length; j++) {
          if (companyName[j].toLowerCase() === 'o') {
              oCount++;
          }
      }

      if (oCount ===2) {
          filteredCompanies.push(companyName);
      }
  }

  console.log(filteredCompanies); 

//15-16
  let sortCompanies=itCompanies.sort();
  console.log(sortCompanies)

  let reverseCompanies=itCompanies.reverse()
  console.log(reverseCompanies) 


//17-18
  let scliceFirst3=itCompanies.slice(0,3)
  console.log(scliceFirst3)

  let slicelast3=itCompanies.slice(itCompanies.length-3)
  console.log(slicelast3)
 


//19
  let company=[...itCompanies];
  let middle=[];
  if((company.length-1)%2===0){
    middle.push(...company.slice(company.length/2,company.length/2+1))
    console.log(middle)
  }
  else{
    middle.push(...company.slice((company.length-1)/2,(company.length+1)/2+1))
    console.log(middle)
  } 

//20
  let shiftItCompanies=[...itCompanies];
  let companies=shiftItCompanies.shift();//shift will delete first items from original array .s
  console.log(shiftItCompanies) 

//21
 let company=[...itCompanies];
    
    if((company.length-1)%2===0){
      company.splice(company.length/2,1)
      console.log(company)
    }
    else{
      company.splice((company.length-1)/2,2)
      console.log(company)
    } 

//22
  let company=[...itCompanies];
  company.pop();
  console.log(company)

//23
  let company=[...itCompanies]
  company.splice(0);
  console.log(company);

  


