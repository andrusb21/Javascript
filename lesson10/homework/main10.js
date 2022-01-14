// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы
// при клике на кнопку исчезал элемент с id="text".

// let btn1 = document.getElementById('btn1');
// btn1.onclick = function (){
//     document.getElementById('text').style.display = 'none';
// }
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn1 = document.getElementById('btn1');
// btn1.onclick = function (){
//     this.style.display='none';
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.checkout_age;
form.onsubmit = function (e) {
    e.preventDefault();
    if (+this.userAge.value < 18) {
        alert('!!!!!!!!!!!!!')
    }
}

//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.