// - Дано натуральное число n. Выведите все числа от 1 до n.
// let n = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i)
//     }
// }
// n(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let AB = (a,b)=>{
//     for (let i = a; i <=b ; i++) {
//         console.log(i)
//
//     }
// }
// AB(2,8)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let foo = (arr, i) => {
//     let newFoo = [];
//     for (let j = 0; j < arr.length; j++) {
//         newFoo.push(arr[j])
//         if (arr.indexOf(i) === i) {
//             j = i + 1;
//         }
//
//     }
//
//     return newFoo
// }
// console.log(foo(([9,8,0,4], 1)))

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function zeroToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[count++] = arr[i];
        }
    }

    for (let i = count; i < arr.length; i++){
        arr[i] = 0;
    }
    return arr;
};

console.log(zeroToEnd([0, 2, 5, 0, 45, 0, 3]));;
