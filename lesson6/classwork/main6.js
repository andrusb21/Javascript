// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// function normName(name) {
//     name
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
// return name
// }
//
// console.log(normName(n2));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randomizer(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.round(Math.random() * 100))

    }
    return arr
}

console.log(randomizer(20));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let arraySort = randomizer(20);
console.log(arraySort.sort((a, b) => a - b));
;

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arrayFilter = randomizer(20);
console.log(arrayFilter.filter(value => value % 2 === 0));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayString = randomizer(20);
console.log(arrayString.map(value => value + ''));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//

let sortNums = (arr, direction) => {
    if (direction === 'asc') return arr.sort((a, b) => a - b);
    if (direction === 'desc') return arr.sort((a, b) => b - a);
};
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'asc'));
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));