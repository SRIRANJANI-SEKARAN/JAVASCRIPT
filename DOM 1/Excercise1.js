//1
const firstPara = document.querySelector('p') // it returns first p tag
console.log(firstPara)

//2
const firstParaById = document.querySelector('#first')
console.log(firstParaById)
const secondParaById = document.querySelector('#second') //second para ID
console.log(secondParaById)
const thirdParaById = document.querySelector('#third')
console.log(thirdParaById)
const fourthParaById = document.querySelector('#fourth')
console.log(fourthParaById)

//3
const paraByTagName = document.querySelectorAll('p')
//4
paraByTagName.forEach(para=>{
  console.log(para.innerText)
})

//5
paraByTagName[paraByTagName.length-1].innerText = 'para Four'

//6 
paraByTagName[0].id = 'js_one' //override
paraByTagName[1].setAttribute('class','js_2') // override
paraByTagName[2].classList.add('js_3') // it adds not override // class = 'para js_3'
