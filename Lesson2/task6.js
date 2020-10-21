// Реализовать функцию для случайной сортировки элементов массива

const unsortedArray = [5, 23, 18, 3, 98, 54, 9];

// const sortedArray = unsortedArray
//   .map((a) => ({sort: Math.random(), value: a}))
//   .sort((a, b) => a.sort - b.sort)
//   .map((a) => a.value);

const sortedArrayNew = unsortedArray.sort( () => .5 - Math.random() );

console.log(sortedArray);
console.log(sortedArrayNew);