// Модифицировать прототип Array, добавив в него метод shuffle, чтобы получить возможность выполнять случайную сортировку для любого массива 

Array.prototype.sortRandom = function() {
  return this.sort( () => Math.random() - 0.5 );
}

const newArray = [25, 8, 12, 4];

console.log(newArray.sortRandom());