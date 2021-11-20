// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let num = [1, 2, 3, 4, 5];
// let string = ['first', 'second', ' third', 'fourth', 'fifth']
// let mix = [1,'frist', true, 4, '5']
// console.log(num, string,mix)
//

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array[0] = 'Привіт';
// array[1] = 'мене';
// array[2] = 'звати';
// array[3] = 'Богдан';
// console.log(array);
// document.write(array);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Bohdan</div>`);
// }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} - Bohdan</div>`);
// }
//     let j = 0;
//     while (j < 20) {
//         document.write(`<h1>empty text while</h1>`);
//         j++;
//     }
//
//     let g = 0;
//     while (g<20) {
//         document.write(`<h1>${g} - empty text with index array while</h1>`);
//         g++;
//     }
//
// let numArray = [1000, 2000, 2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090];
// for (i = 0; i < numArray.length; i++) {
//     console.log(numArray[i])}
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let strArray = ['Bohdan', 'Andrusyshyn', '1996', 'March','First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
// for (a = 0; a<strArray.length; a++) {
//     console.log(strArray[a])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayBoolean = [false, 'two', 1996, true, true, 23, 45, 'vasia', {}, [], 'hi'];
// for (b = 0; b < arrayBoolean.length; b++) {
//     if (typeof arrayBoolean[b] === 'boolean') {
//         console.log(arrayBoolean[b])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayNumber = [false, 'two', 1996, true, 'okten', 23, 45, 'vasia', {}, [], 'hi'];
// for (i = 0; i < arrayNumber.length; i++) {
//     if (typeof arrayNumber[i] === 'number') {
//         console.log(arrayNumber[i]);
//     }
// }