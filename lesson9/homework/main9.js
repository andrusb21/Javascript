// // let str = '+380 96 - 52 - 42 - 457.';
// // let s = str.replaceAll(' ', '').replaceAll('-', '').replaceAll('.','');
// // console.log(s);
// // console.log(typeof (s))
// // let s1 = str.toUpperCase();
//
// // let arr = [11,22,33, [1,2,3],'asd'];
// // let map = arr.map(value => console.log(value));
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let h1 = 'hello world';
let h1lenght= h1.length;
console.log(h1lenght)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'hello';
let H = str[0].toUpperCase() + str.slice(1)
console.log(H);
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.