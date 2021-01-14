// Кэширование

// Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.

// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:  
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true} 


const cache = function(arg1, arg2) {
  let cacheArgs = [];
  let currentArgs = {};
  let results = {};
  let correctItem = {};
  
  return function(arg1, arg2) {
    currentArgs = {
      1: arg1,
      2: arg2,
      value: Math.pow(arg1, arg2)
    };

    let checkSavedArgs = cacheArgs.some((item) => item[1] == arg1 && item[2] == arg2);
    
    if(checkSavedArgs === false) {
      cacheArgs.push(currentArgs);      
      results = {
        value: currentArgs.value,
        fromCache: false
      }
    } else {
      correctItem = cacheArgs.find((item, index) => item[1] == arg1 && item[2] == arg2);
      results = {
        value: correctItem.value,
        fromCache: true
      }
    };
    
    return results;
  }
};

const calculate = cache();

console.log(calculate(2, 3));
console.log(calculate(2, 3));
console.log(calculate(3, 4));
console.log(calculate(3, 4));
console.log(calculate(5, 3));