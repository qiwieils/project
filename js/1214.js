'use strict'

// 콜백 함수
// 호출해서 결과값을 받아오는 것 

// {
//   function a(callback) {
//     setTimeout(() => {
//       console.log('A')
//       callback;
//     }, 1000);
//   }
//   function b() {
//     setTimeout(() => {
//       console.log('B')
//     }, 1000);
//   }
//   function c() {
//     setTimeout(() => {
//       console.log('C')
//     }, 1000);
//   }
//   function d() {
//     setTimeout(() => {
//       console.log('D')
//     }, 1000);
//   }  
//   a()
//   b()
//   c()
//   d()
// }
function a() {
  return new Promise(function(resolve){
    setTimeout(() => {
      console.log('A')
    }, 1000);
  })
  function b() {
    console.log('B')
  }
  function test(){
    a()
    b()
  }
  test()
    
} 





