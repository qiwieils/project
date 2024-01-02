'use strict';

// 이벤트 흐름의 이해
// 이벤트의 진행 방향에 따라 버블링과 이벤트 캡처링
// 캡처링 -> 위에서부터 아래 방향으로 순서적으로
// 버블링 -> 아래에서 즉 하위 이벤트 객체에서 상위 이벤트 객체로 전파


// element1.addEventListener('click',e => console.log('1 click'))
// element2.addEventListener('click',e => console.log('2 click'))
// element3.addEventListener('click',e => console.log('3 click'),true)
// element4.addEventListener('click',e => console.log('4 click'))

// // 이벤트 전파 제어하기

// const noEl =document.getElementsByTagName('p')[0]
// const spanEl = noEl.querySelector('span')

// noEl.addEventListener('contextmenu',function(){
//   console.log('contextmenu 호출')
// })

// spanEl.addEventListener('contextmenu',function(e){
//   console.log('이벤트 막은 글 클릭')
//   e.stopPropagation
//   e.preventDefault
// 

document
.querySelector('#list')
.addEventListener('click',(event)=>{
  if (event.target.className.indexOf('removebtn')<0){
    return;
}
const li = event.target.closest('li')
console.log(`${li.innerText} 삭제`)
li.remove()
})
// 사용자 이벤트 생성하기

function buildAlert(title,message){
  const alert = document.createElement('div')
  const id = Math.ceil(Math.rendom()*1000)

  alert.className ='alert'
  alert.innerHTML =`
  
  <span class-"close"&times;</span>
  <h3>${title}</h3>
  <p>${message}</p>
  `
  alert.stylebackgroundColor ='#000'
  alert.style.color= '#fff'
  alert.id =id;
  alert.querySelector('span.close')
  addEventListener('click', e => {
    const closeEvt =new CustomEvent('close')
    bubbles : true;
    detail : {id , message} 
  })
  alert.dispatchEvent(closeEvt)
  alert.remove()
  
  document.body.prepend(alert)
  return alert;
}
document.getElementById('#orderbtn')
.addEventListener('click', e =>{
  const alertEl =
  buildAlert(
    '에러',
    '로그인해주세요'
  )
alertEl.addEventListener('close', e =>{
  console.log(e.detail) 
  console.log('error창을 닫습니다') 
})
})


'use stirct';

// HTML 폼 활용하기

const orderForm =document.forms.order,
  userField = orderForm.elements.userInfo,
  productField= orderForm.elements.productInfo

  console.log(orderForm)
  console.log(userField)
  console.log(productField)
  
  document.getElementById('btn1')
  .addEventListener('click',function(){
    const {name ,tel} =userField.elements;
    console.log(`${name.value} 사용자${tel.value}로 주문합니다`)
  })
  orderForm.addEventListener('submit', e=>{
    e.preventDefault()
    const {productName,color} = productField.elements;
    console.log(`${productName.value} 상품 ${color.value}색을 주문합니다`)

  }) 
  orderForm.method ='GET'
  orderForm.submit();
  