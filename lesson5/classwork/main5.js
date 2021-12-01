// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a)
        document.write(a)
    } else if (b < a && b < c) {
        console.log(b)
        document.write(b)
    } else {
        console.log(c)
        document.write(c)
    }
}
numMin(6, 38, 2)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numMax = (d, e, f) => {
    if (d > e && d > f) {
        console.log(d)
        document.write(d)
    } else if (e > d && e > f) {
        console.log(e)
        document.write(e)
    } else {
        console.log(f)
        document.write(f)
    }
}
numMax(32, 123, 11)

// - створити функцію яка повертає найбільше число з масиву
let maxArray = [200,3,4,5,6,10,400,3,600];

let arrayMax = (array) => {
    let max = array[0];
    for (const element of array) {
        if(element > max){
            max = element;
        }
    }
    return max;
}
document.write(`<h2>Найбільший елемент масиву: ${arrayMax(maxArray)}</h2>`);
// - створити функцію яка повертає найменьше число з масиву
let minArray = [200,3,4,5,6,10,400,3,600];

let arrayMin = (array) => {
    let min = array[0];
    for (const element1 of array) {
        if(element1 < min){
            min = element1;
        }
    }
    return min;
}
document.write(`<h2>Найменший елемент масиву: ${arrayMin(minArray)}</h2>`);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = [1,2,3,4,5,6,7,8,9,10]
let sumArray = (array)=>{
    let akum = 0;
    for (const item of array) {
        akum=akum+item;
    }
    return akum
}
console.log(sumArray(sum))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let sum2 = [1,2,3,4,5,6,7,8,9,10]
let secondarySum = (array)=>{
    let akum2 = 0;
    for (const item of array) {
        akum2=akum2+item;
    }
    return akum2/array.length
}
console.log(secondarySum(sum2))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let arrayMax2 = (...arg) => {
    let max2 = arg[0];
    let min2=arg[0];
    for (const element of arg) {
        if(element > max2){
            max2 = element;
        }
        if(element<min2){
            min2=element
        }
    }
    return min2;
    console.log(max2);

}
document.write('Мінімальне число з введених: ' + arrayMax2(-10, 10, -1000233, 734848734))
// - створити функцію яка заповнює масив рандомними числами
const funRandom = (length)=> {
    let arrayEmpty = [];
    for (let i = 0; i < length; i++){
        arrayEmpty.push(Math.floor(Math.random()*100));
    }
return arrayEmpty
};
console.log(funRandom(10))
document.write(funRandom(122))
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let funRandomLimit = (length,limit)=> {
    let arrayEmpty2 = [];
    for (let i = 0; i < length; i++){
        arrayEmpty2.push(Math.floor(Math.random()*limit));
    }
    return arrayEmpty2
};
console.log(funRandomLimit(10,20))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let ritarArray = (item)=>{
    let newArray2=[];
    for (let i = item.length - 1; i >= 0; i--) {
        const itemElement = item[i];
        newArray2.push(itemElement)
    }
    return newArray2
}
console.log(ritarArray([1,2,3,4,5]))