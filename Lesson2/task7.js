// Создать пустой объект и наполнить его данными:
// 1. Добавить свойство name и записать в него значение ‘Alex’
// 2. Добавить свойство lastName и записать в него значение ‘Smith’
// 3. Присвоить значение ‘Bob’ в свойство name
// 4. Удалить оба свойства

const person = Object.create({}, {
  name: {
    value: 'Alex',
    writable: true,
    configurable: true
  },
  lastName: {
    value: 'Smith',
    configurable: true
  }
});

person.name = 'Bob';

console.log(person.name);
console.log(person.lastName);

delete person.name;
delete person.lastName;


console.log(person.name);
console.log(person.lastName);