// Реализовать цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран

let minValue = 1;
let maxValue = 20;
let counter = 1;
let startNumber = 1;

for(let x = minValue; x <= maxValue; x++) {
  if(x % 2 == 0) {
    console.log(x);
  }  
}


while(counter <= maxValue) {
  if(counter % 2 == 0) {
    console.log(counter);
  }  
  counter++;
}

do{
  startNumber++;
  if(startNumber % 2 == 0) {
    console.log(startNumber);
  }
} while(startNumber <= maxValue);