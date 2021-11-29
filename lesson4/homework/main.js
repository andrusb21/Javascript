// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b) {
//     return a*b
// }
// console.log(square(2,4))
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// const PI = 3.14;
// function sqcircle(r) {
//     return PI*r**2
// }
// console.log(sqcircle(6))
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sqCylinder(h,r) {
//     return 2*PI*r*h
// }
// console.log(sqCylinder(10,2))
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
// let numArray = [2020, 2021,2022,2023]
// function array(array) {
// for (let number of numArray) {
//     console.log(number)
// }
// }

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function P(text) {
//     document.write(`<div>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`</div>`);
// }
// P(`asdasdasd`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// ul(`page`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function li(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// li('page', 50);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];
// function primitives (array){
//     document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(anyArray);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
// function objArray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}-${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(newArray);