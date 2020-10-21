// Реализовать функцию для фильтрации массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

const numbers = [-20, -10, 0, 10, 20, 30];

const sortCallback = function(a, b) {
  return b - a;
}

function sortDesc(array) {
  console.log(array.sort(sortCallback));
}

sortDesc(numbers);