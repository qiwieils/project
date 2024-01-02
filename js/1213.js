// 'use strict'  ;

const { functionsIn } = require('lodash')

// const { values } = require('lodash');


// // 문자열 순환하기 -> for of  

// {
//   const str = 'hello'

//   for (const item of str){
//     console.log(item);

//   }

//   const iter =str[Symbol.iterator]();
//   console.log(iter.next())
// }
// // 배열 순환하기 -> for of

// {
//   const products = [
//     {name : 'bag'},{name : 'notebook'}  
//   ]
//   for (const item of products) {
//     console.log(item)
//     console.log(item.name)
//   }
//   const iter = products[Symbol.iterator]()
//   console.log(iter.next())
//   console.log(iter.next())
//   console.log(iter.next())
// }

// // Map 객체에 요소 추가/삭제/확인하기
// // set , get ,delete ,has
// // Map 객체 키는 다양한 자료형 값으로 정의할 수 있다.
// // Map 객체는 기본적으로 symbol.iterator 정의되어 있다

// {
//   const map = new Map()

//   map.set('one',1)
//   map.set('two',2)

//   console.log(map.get('one'))
//   console.log(map.get('two'))
  
//   map.delete('one')
//   console.log(map.get('one'))
//   console.log(map.get('two'))
//   console.log(map.has('one'))
//   console.log(map.has('two'))

// }

// // Map 객체의 크기 확인하기 -> size

// {
//   const map = new Map()

//   map.set('one',1)
//   map.set(2,'two')
//   map.set([1,2,3],'three elements')
//   map.set({a: 'A', b: 'B'},'object elements')
//   // map.set(functions(){} ,'function elements')
// }
// console.log 

// // Map 객체 요소 나열하기
// // keys , values, entries

// {
//   const map = new Map()
//   map.set('one',1)
//   map.set('two',2)
//   map.set('three',3)

//   const keys = map.keys()
//   const values = map.values()
//   const entries = map.entries()

//   console.log(keys)
//   console.log(values)
//   console.log(entries)
  

//   console.log(keys.next().keys)
//   console.log(values.next().value)
//   console.log(entries.next().entries)
//   console.clear
// }

// // Map 객체 순환하기 
// // for-of ,forEach
// {
//   const map = new Map()

//   map.set('one',1)
//   map.set('two',2)

//   console.log('키 정보만 출력합니다.')
//   for(let key of map.keys()){
//     console.log(key)
//   }
//   console.log('값 정보만 출력합니다')
//   for(let value of map.values()){
//     console.log(value)
//   }

//   console.log('z키 값 둘다')
//   // for(let value of map.entries()){
//   //   console.log(`key${key}, vaule${vaule}`)
//   // }
  
// }

// // Map 객체 순환하기 2
// {
//   const map =new Map()
//   for (let num of [1,2,3,4,5]){
//     map.set((value) => value *2, num)
//   }
//   for (let [func,value] of map) {
//     console.log(func(vaule))
//   }
// }

// // set 객체의 값 , 추가/삭제/확인
// // add , deletem , has

{
  const s = new Set()
  s.add('one',1)
  s.add('two',2)
  s.add('three',3)
  console.log(s.has('two'))
  s.delete('three')
  console.log(s.has('three'))
  console.log(s.has('one'))
  
}

// set 객체의 크기 확인 -> size
// {
//   const s = new Set()

// }

{
  const arr = ['one','two','three','two','one','four']
  const s= new Set(arr)
  console.log([...s])
}

// 일정 시간 후에 코드 실행하기
// setTimeout()

// {
  // const time ={
  //   run :function() {
  //     if(this.t) console.log('dlaltlfgod')
  //     this.t = setTimeout(function(){
  //   console.log(tlfgod)
  // },3000)
  //   }
  //   cancel : function({
  //     if (this.t) clearTimeout(this.t)


//       }
//     })
//   }
// }