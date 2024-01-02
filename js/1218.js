'use strict';

// DOM 속성과 태그 속성 이해

const divEl =document.getElementById('div1')
const inputEl = document.getElementById('input1')

console.log (divEl,inputEl)

const userV = input1.value
console.log(userV)
divEl.innerText =userV


inputEl.addEventListener('change',(event)=>{
  console.log(event.currentTarget.value)

})
console.log(divEl.hasAttribute('id'))
console.log(divEl.getAttribute('id'))
console.log(divEl.id)
divEl.removeAttribute('id')
console.log(divEl)
console.log(divEl.hasAttribute('id'))

divEl.setAttribute('id','new-id')
console.log(divEl)
divEl.id ='new-id2'
console.log(divEl)

console.log(divEl.getAttribute('class'))
console.log(divEl.class)
console.log(divEl.className)
console.log(divEl.dataset.name)
// console.log(divEl.)