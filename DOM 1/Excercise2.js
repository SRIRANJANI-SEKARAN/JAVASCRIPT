//3
const getPara = document.querySelectorAll('p')
getPara[0].setAttribute('class','para')
getPara[1].setAttribute('class','para')
getPara[2].setAttribute('class','para')
getPara[3].setAttribute('class','para')

getPara[0].setAttribute('id','first_para')
getPara[1].setAttribute('id','second_para')
getPara[2].setAttribute('id','third_para')
getPara[3].setAttribute('id','fourth_para')

getPara[0].innerText = 'First Para'
getPara[1].innerText = 'Second Para'
getPara[2].innerText = 'Third Para'
getPara[3].innerText = 'Fourth Para'

getPara.forEach(para=>console.log(para))

//1 & 2
getPara.forEach((para,i)=>{
  if(i%2 === 0){
    para.style.fontSize = '20px'
    para.style.fontFamily = 'Arial'
    para.style.color = 'blue'
    para.style.backgroundColor = 'yellow'
    para.style.border = 'dashed 5px blue'
    para.style.textAlign = 'center'
    para.style.padding = '10px'
  } else {
    para.style.fontSize = '30px'
    para.style.fontFamily = 'cursive'
    para.style.color = 'yellow'
    para.style.backgroundColor = 'blue'
    para.style.border = 'solid 5px yellow'
    para.style.textAlign = 'center'
    para.style.padding = '10px'
  }
})