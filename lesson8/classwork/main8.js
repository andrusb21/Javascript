// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// document.getElementById('main_header').classList.add('sep-2021')
// let txtcolor = document.getElementsByClassName('sep-2021').style.background = 'red';
// b) робить шириниу елементу ul 400px

// let ul = document.getElementByTagName('ul');
// ul.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elementsByClassName = document.getElementsByClassName('linkList');
for (const elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2

function addtext (text) {
document.getElementsByClassName('listElement2').innerText= text
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.background = 'silver'

}
// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.classList.add('anchor')
}
console.log(a);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let a1 = document.getElementsByTagName('a');
for (const a1Element of a1) {
    if (a1Element.innerText === 'link3') {
        a1Element.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let a2 = document.getElementsByTagName('a');
for (const a2Element of a2) {
    a2Element.classList.add('a.innerText')
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let Fon = document.getElementsByClassName('sub-header');
for (const fonElement of Fon) {
    fonElement.style.background = prompt('Введіть колір фону')
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let textColor = document.getElementsByClassName('sub-header');
for (const textColorElement of textColor) {
    if (textColorElement.innerText === 'content 2 segment') {
        textColorElement.style.color = prompt('Введіть колір тексту')
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let c1 = document.getElementsByClassName('content_1');
for (const c1Element of c1) {
    c1Element.innerText = prompt('text')
}
// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let m = document.getElementsByClassName('text2');
for (const mElement of m) {
    mElement.innerText = 'sep-2021'
}