// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let content = document.getElementById('content')
// console.log(content.innerText)
// -- отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules').innerText
// console.log(rules);
// -- замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById('content')
console.log(content.innerText='Bohdan')
// -- замініть текст параграфа з id 'rules' на будь-який інший

let rules = document.getElementById('rules').innerText = 'Andrus'
console.log(rules);

// -- змініть кожному елементу колір фону на червоний
let color = document.body.children;
for (const child of color) {
child.style.background = 'red'
}
// -- змініть кожному елементу колір тексту на синій

let textColor = document.body.children;
for (const textColorElement of textColor) {
    textColorElement.style.color= 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classlist = document.getElementById('rules').classList
console.log(classlist);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules =  document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'red'
}
//
