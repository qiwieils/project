'use stirct';

// 브라우저 로컬 스토리지 사용

// class Cart {
//   constructor() {
//     this._key = 'app-cart'
//     const itemString = localStorage.getItem(this._key)
//     console.log(this._key)
//     if(itemString) {
//       this.items = JSON.parse(itemString)
//     } else {
//       this.items = []
//     }
//   }
//   addItem(item) {
//     this.items.push(item)
//     const itemString = JSON.stringify(this.items)
//     localStorage.setItem(this._key,itemString)
//     this.items = item
//   }
// }

// const cart = new Cart()
// console.table(cart.items)
// cart.addItem({name : 'notebook' , price : 200000})


// 로컬 파일을 브라우저에서 일기

let dropZone = document.querySelector('#filebox')
dropZone.addEventListener('dragover', e => {
  e.stopPropagation()
  e.preventDefault()
})
dropZone.addEventListener('drop', e => {
  const files =e.dataTransfer.files
  Array.from(files)
  .filter(file => file.type.match('image.*'))
  .forEach(file => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const imgEl = document.createElement('img')
      imgEl.sec = e.target.result 
      imgEl.title = file.name
      document.getElementById('result').appendChild(imgEl)
    }
    reader.readAsDataURL(file)
  })
})