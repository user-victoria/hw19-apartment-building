// 1. Створити клас Людина.
/*
    - Властивості:
        * імʼя;
        * стать.
    - Методи:
        * конструктор, який приймає два параметри: імʼя та стать.
*/

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

// В якості демонстрації створити:
// декілька екземплярів класу Людина;
let person1 = new Person('Maria', 'woman');
console.log('person1', person1);

let person2 = new Person('Ivan', 'man');
console.log('person2', person2);

let person3 = new Person('David', 'man');
console.log('person3', person3);

let person4 = new Person('Alex', 'man');
console.log('person4', person4);

let person5 = new Person('Marta', 'woman');
console.log('person5', person5);


// 2. Створити клас Квартира.
/*
    - Властивості:
        * конструктор не потрібен;
        * масив жителів, який при створенні пустий.
    - Методи:
        * додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
*/

class Flat {
    residents = [];
    addFlatResident(residentPerson) {
        this.residents.push(residentPerson);
    }
}

// декілька екземплярів класу Квартира;
// додати екземпляри класу Людина до екземплярів класу Квартира;
let flat1 = new Flat();
flat1.addFlatResident(person1);
flat1.addFlatResident(person2);
console.log('flat1', flat1);

let flat2 = new Flat();
flat2.addFlatResident(person3);
console.log('flat2', flat2);

let flat3 = new Flat();
flat3.addFlatResident(person4);
flat3.addFlatResident(person5);
console.log('flat3', flat3);


// 3. Створити клас Будинок.
/*
    - Властивості:
        * масив квартир, який при створенні пустий;
        * максимальна кількість квартир.
    - Методи:
        * конструктор, який приймає один параметр: максимальну кількість квартир;
        * додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти,
          чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру,
          в іншому випадку виводить у консоль відповідне повідомлення.
*/

class House {
    flats = [];
    constructor(maxNumFlat) {
        this.maxNumFlat = maxNumFlat;
    }
    addFlat(flat) {
        if (this.flats.length < this.maxNumFlat) {
            this.flats.push(flat);
        }
        else {
            console.log('Кількість квартир більше вказаного максимального числа');
        }
    }
}

// екземпляр класу Будинок;
// додати екземпляри класу Квартира до екземплярів класу Будинок.
let house = new House(3); // (*)
house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
console.log('house', house);

// (*) Примітка: якщо поставити цифру 2, то виведеться 90 рядок і третя квартира не додасться до будинку