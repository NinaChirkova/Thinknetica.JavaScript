// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:
// Есть следующее расширение объектов: 
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник 

const Human = function(data) {
  this.firstName = data.name;
  this.lastName = data.lastName;
  this.location = data.location;
  this.phoneNumber = data.phoneNumber;
  this.eat = data.eat();
  this.sleep = data.sleep();
  this.callFriend = data.callFriend();  
};

const Employee = function(data) {
  this.writeReport = data.writeReport();
  this.organizeMeeting = data.organizeMeeting();
};

const CurrentEmployee = function(data) {
  this.position = data.position;
  this.startDate = data.startDate;
  this.baseSalary = data.baseSalary;
  this.salaryCurrency = data.salaryCurrency;
  this.department = data.department;
  this.startVacation = data.startVacation();
};

const FormerEmployee = function(data) {
  this.retire = data.retire();
};

const john = {
  name: "John",
  lastName: "Smith",
  position: "Senior engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890",
  eat: function() {
    return "It's time to eat!";
  },
  sleep: function() {
    return "Let's go to sleep!";
  },
  callFriend: function() {
    return "I'm calling you, my friend!";
  },
  writeReport: function() {
    return "report";
  },
  organizeMeeting: function () {
    return "Meeting";
  },
  retire: function () {
    return "I quit!";
  },
  startVacation: function () {
    return "Vacation";
  }
};

Employee.prototype = new Human(john);
CurrentEmployee.prototype = new Employee(john);
FormerEmployee.prototype = new Employee(john);

const newEmployee = new CurrentEmployee(john);


console.log(newEmployee.lastName);
console.log(newEmployee.startVacation);