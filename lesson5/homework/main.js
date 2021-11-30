// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let areaP = (a, b) => {
    return a * b
}
console.log(areaP(2, 4));
document.write('Площа прямокутника:' + areaP(2, 4));

// - створити функцію яка обчислює та повертає площу кола
let areaSrc = (r) => {
    return r ** 2 * 3.14
}
console.log(areaSrc(6));
document.write('Площа кола:' + areaSrc(6));
// - створити функцію яка обчислює та повертає площу циліндру
let areaCylinder = (r, h) => {
    return 2 * 3.14 * r * h
}
console.log(areaCylinder(4, 10));
document.write('Площа циліндра: ' + areaCylinder(4, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ["Bohdan", 100, 200,300];
let arr =(arr)=>{
    for (const arrElement of array) {
        console.log(arrElement);
    }
}
arr(array)
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let parahraf = (text)=>{
//     document.write(`<p>${text}</p>`);
// }
// parahraf("Bohdan")
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ul = (text)=>{
        document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`</ul>`);
}
ul("Bohdan")
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulNum = (text,number)=>{
    document.write(`<ul>`);
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`<ul>`);
}
ulNum("Bohdan",10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array3 = ["Bohdan", 100,200,300,400,500]
let arrayList = (array)=>{
    document.write(`<ol>`);
    for (const arrayElement1 of array3) {
        document.write(`<li>${arrayElement1}</li>`)
    }
    document.write(`</ol>`);
}
arrayList(array3)
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];

const objArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
objArray(newArray);
