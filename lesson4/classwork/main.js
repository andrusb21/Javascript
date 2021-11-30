// function min(a,b,c) {
//     if(a<b && a<c) {
//         console.log(a)
//         document.write(a)
//     } else if (b<a && b<c) {
//         console.log(b)
//         document.write(b)
//     } else {
//         console.log(c)
//         document.write(c)
//     }
// }
// min(12423,53251,123)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a,b,c) {
//     if(a>b && a>c) {
//         console.log(a)
//         document.write(a)
//     } else if (b>a && b>c) {
//         console.log(b)
//         document.write(b)
//     } else {
//         console.log(c)
//         document.write(c)
//     }
// }
// max(12423,53251,123)

// - створити функцію яка повертає найбільше число з масиву


// let maxArray = [200,3,4,5,6,10,40000,3,600]
// function arrayMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     return max
//     }



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


let summArray = [1,2,3,4]; // 10
function sumElement (array){
    let sum = 0;
    for (const arrayElement of array) {
        // sum += arrayElement; // // 1 спосіб скорочений
        sum = arrayElement + sum;
    }
    return sum;
}
document.write(sumElement(summArray))