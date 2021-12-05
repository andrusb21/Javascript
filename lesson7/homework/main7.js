// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let Users = [
    new User(1, 'Petro', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(2, 'Ivan', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(3, 'Vasyl', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(4, 'Grisha', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(5, 'Misha', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(6, 'Dima', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(7, 'Petya', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(8, 'Vasya', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(9, 'Slavik', 'Piterson', 'piterson@petro.com', '1234559595'),
    new User(10, 'Kolya', 'Piterson', 'piterson@petro.com', '1234559595'),
]
console.log(Users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = Users.filter(value => value.id % 2 === 0)
console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = Users.sort((a, b) => b.id - a.id)
console.log(sort);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id, name, email, phone, order) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client()
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
