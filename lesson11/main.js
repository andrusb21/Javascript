let btn = document.getElementsByClassName('btn')[0];
let user = {
   "id": 2,
   "name": "Leanne Graham",
   "username": "Bret",
   "email": "Sincere@april.biz",
   "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
      }
   },
   "phone": "1-770-736-8031 x56442",
   "website": "hildegard.org",
   "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
   }
};
let btn2 = document.getElementsByClassName('btn2')[0];
let button = document.createElement('button');
button.innerText = 'ADD';
btn.append(button)
// btn.addEventListener('click', function () {
//        window.location.href= 'user.html'
//    })
button.addEventListener('click',function () {
   localStorage.setItem('user', JSON.stringify(user))

})
button.addEventListener('click', function (){
   window.location.href= 'user.html'
})
