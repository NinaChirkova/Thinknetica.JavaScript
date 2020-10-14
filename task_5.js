//     Реализовать if для проверки доступа 

// Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
// 1. Возраст от 18 до 35 лет
// 2. Оплачена месячная подписка
// 3. Не действует блокировка
// 4. Имя пользователя не содержит внутри себя запрещенные слова
// Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия 

let user = {
  age: 36,
  paid: false,
  blocked: false,
  badUsername: false,
  isAdmin: true
};

if(user.isAdmin === true && 
   user.age >= 18 && 
   user.age <= 35) {
  console.log("Access granted for Admin");
} else if(user.age >= 18 && 
          user.age <= 35 && 
          user.paid === true && 
          user.blocked === false && 
          user.badUsername === false) {
  console.log("Access granted for User");
} else {
  console.log("Sorry, access denied");
}



(user.isAdmin === true && user.age >= 18 && user.age <= 35) ? console.log("Access granted for Admin") : (user.age >= 18 && user.age <= 35 && user.paid === true && user.blocked === false && user.badUsername === false) ? console.log("Access granted for User") : console.log("Sorry, access denied");