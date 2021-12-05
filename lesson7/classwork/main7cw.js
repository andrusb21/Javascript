//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car(model, producer, year, maxspeed, volume,) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }
    this.info = function () {

        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкіть - ${this.maxspeed}, обєм двигуна - ${this.volume}, `)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed += newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver
    };
}

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class carClass {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {

        console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкіть - ${this.maxspeed}, обєм двигуна - ${this.volume}, `)
    };

    increaseMaxSpeed(newSpeed) {
        this.maxspeed += newSpeed
    };

    changeYear(newValue) {
        this.year = newValue
    };
    addDriver(driver) {
        this.driver = driver
    };
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cinderellas=[
    new Cinderella('Galya','20','36'),
    new Cinderella('Dasha','20','37'),
    new Cinderella('Masha','20','38'),
    new Cinderella('Lyuba','20','39'),
    new Cinderella('Tanya','20','38'),
    new Cinderella('Ira','20','37'),
    new Cinderella('Lesya','20','36'),
    new Cinderella('Vira','20','40'),
    new Cinderella('Zoya','20','40'),
    new Cinderella('Lida','20','40'),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince=new Prince('Petro','30','38')
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let cinderella = cinderellas.find(value => value.size===prince.shoe)