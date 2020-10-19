// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

const human = Object.create({}, {
  fullName: {
    set: function(value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
    get() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  dateOfBirth: {
    set: function(value) {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let splitDate = value.split('.');
      
      if(splitDate[0].length !== 2 || splitDate[1].length !== 2 || splitDate[2].length !== 4) {
        console.log('Date of birth input is invalid');
      } else {
        [this.day, this.month, this.year] = splitDate;
        this.age = currentYear - Number(this.year);
      }      
    },
    get() {
      return `${this.day}.${this.month}.${this.year}`;
    }
  }
})

human.fullName = 'Jane Doe';
human.dateOfBirth = '01.01.2006';

console.log(human);
console.log(human.fullName);
console.log(human.dateOfBirth);