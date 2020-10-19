// Реализовать функцию для фильтрации массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

const numbers = [-20, -10, 0, 10, 20, 30];

const sortCallback = function(a, b) {
  if(a < b) {
    return 1;    
  } else if(a > b) {
    return -1;
  } else {
    return 0;
  };
}

function sortDesc(array) {
  console.log(array.sort(sortCallback));
}

sortDesc(numbers);