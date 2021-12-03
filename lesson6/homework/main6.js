// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let lengthOne = 'hello world';
console.log(lengthOne.length);

let lengthTwo = 'lorem ipsum';
console.log(lengthTwo.length);

let lengthEmpty = 'javascript is cool';
console.log(lengthEmpty.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let UpperCaseOne = 'hello world'
console.log(UpperCaseOne.toUpperCase())

let UpperCaseTwo = 'lorem ipsum'
console.log(UpperCaseTwo.toUpperCase())

let UpperCaseThree = 'javascript is cool';
console.log(UpperCaseThree.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowerOne = 'HELLO WORLD';
let lowerOneCase=lowerOne.toLowerCase();
console.log(lowerOneCase)

let lowerTwo = 'LOREM IPSUM';
let lowerTwoCase=lowerTwo.toLowerCase();
console.log(lowerTwoCase);

let lowerThree = 'JAVASCRIPT IS COOL';
let lowerThreeCase=lowerThree.toLowerCase();
console.log(lowerThreeCase);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
let trim = dirtyString.trim();
console.log(trim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
    function stringToarray(str){
        return str.split(' ')
    }
let arr = stringToarray(str);
console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str2 = 'Каждый охотник желает знать';
    function delete_characters(str, length){
        return str2.substring(0,length)
    }
document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str3 = "HTML JavaScript PHP";
    function insert_dash(str){
        return str3.replaceAll(' ', '-').toUpperCase()
    }
document.writeln(insert_dash(str3)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
function firstUp(str){
    return str[0].toUpperCase() + str.slice(1)
}

console.log(firstUp('bohdan'))
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(str){
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

console.log(capitalize('bohdan andrusyshyn mykhaylovych'))