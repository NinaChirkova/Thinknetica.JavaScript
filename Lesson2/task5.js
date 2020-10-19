// Нужно выполнить с ним следующие преобразования:
// 1. Узнать среднюю зарплату сотрудников
// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]

// 1. Узнать среднюю зарплату сотрудников
function reduceCallback(accumulator, currentValue) {
  return accumulator + Number(currentValue.salary);
}

function employeesSalary(array) {
  let employeesNumber = employees.length;
  let averageSalary = array.reduce(reduceCallback, 0) / employeesNumber;
  console.log("Средняя зарплата: " + averageSalary);
}

employeesSalary(employees);

// 2. Отсортировать сотрудников по зарплате

const sortCallback = function(a, b) {
  return a.salary - b.salary;
}

const sortEmployees = employees.sort(sortCallback);
console.log(sortEmployees);

// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
const filterCallback = function(item) {
  return Number(item.salary) > 4500 && Number(item.age) > 25;
}

const findEmployees = employees.filter(filterCallback);
console.log(findEmployees);