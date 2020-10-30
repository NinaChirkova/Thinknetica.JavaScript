// Калькулятор

// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат, по умолчанию должны присутствовать методы add, substract

// Пример: 
// const calculator = new Calc()

// calculator.operation('31 + 32') // 63
// calculator.operation('10 * 2') // 10
// calculator.addOperation('/', (a, b) => a / b)
// calculator.operation('10 / 2') // 5

// Также, он должен хранить историю всех операций и выводить ее по запросу:
 
// calculator.history() /* [{operation: '+', operands: [31,32]}, {operation: '*', 
// operands: [10,2]}, {operation: '/', operands: [10,2]}] */
 
// И очищать историю
// calculator.clearHistory()
// calculator.history() // 

const Calc = function() {
  let operationsInCache = {"+": (a, b) => a + b, 
                           "-": (a, b) => a - b};
  let operationsAllowed = ["+", "-", "/", "*"];
  let operationsHistory = [];
  let inputData = {};  
  let result;
  
  
  function splitInputData(str) {
    let splitString = str.split(' ');
    
    if(splitString.length !== 3) {
      console.log("Input is not valid");
      return false;
    } else if(!Object.keys(operationsInCache).includes(splitString[1])) {
      console.log("Operation doesn't exist");
      return false;
    }    
    return splitString;
  };
  
  this.operation = function(str) {
    let splitArgs = splitInputData(str);
    
    if(splitArgs !== false) {      
      let currentOperation = (Object.keys(operationsInCache).find((item) => item == splitArgs[1]));
      result = operationsInCache[currentOperation](parseInt(splitArgs[0]), parseInt(splitArgs[2]));
      operationsHistory.push({operation: splitArgs[1], operands: [parseInt(splitArgs[0]), parseInt(splitArgs[2])]});
      console.log(result);
      
    };
  };
  
  this.addOperation = function(str, func) {
    if(!operationsAllowed.find((item) => item == str)) {
      console.log('Operation is not allowed');
    } else if(Object.keys(operationsInCache).find((item) => item == str)) {
      console.log('Operation already exists');
    } else {
      operationsInCache[str] = func;
    }
  };
  this.history = function() {
    console.log(operationsHistory);
  };
  this.clearHistory = function() {
    operationsHistory = [];
  };
};

const calculator = new Calc();

calculator.operation('31 +32');
calculator.operation('3 - 12');
calculator.operation('3 / 12');
calculator.addOperation('/', (a, b) => a / b);
calculator.operation('12 / 3');
calculator.addOperation('*', (a, b) => a * b);
calculator.operation('5 * 8');
calculator.operation('5 + 8');
calculator.history();
calculator.clearHistory();
calculator.history();
calculator.operation('5 + 8');
calculator.history();