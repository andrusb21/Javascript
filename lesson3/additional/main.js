// // 1. Створити пустий масив та :
// //     a. заповнити його 50 парними числами за допомоги циклу.
// //     b. заповнити його 50 непарними числами за допомоги циклу.
// //     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
// let arr = [];
// for (let i = 0, j = 0; i <= 100; i += 2, j++) {
//     arr[j] = i;
// }
// console.log(arr)
//
//
//
// let arr1 = [];
// for (let i = 1, j = 0; i <= 100; i += 2, j++) {
//     arr1[j] = i;
// }
// console.log(arr1)

let arr2 = [];
for (let i = 0; i < 20; i++) {
    arr2[i] = Math.floor(Math.random() * 100);
}
console.log(arr2)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = 7 + Math.floor(Math.random() * 724);
}
console.log(arr3)

// 2. Вивести за допомогою console.log кожен третій елемент


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
let check = [100,250,50,168,120,345,188];
let akum = 0;
for (let i = 0; i <check.length ; i++) {
akum = akum + check[i]
}
console.log(akum/check.length);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
