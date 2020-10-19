//      Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:  
//     const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
//     filterByLength(fruits, 0,5) // [‘apple’, ‘’]


const fruits = ['orange', 'apple', 'banana', ''];

// function filterByLength(array, minLength, maxLength) {
//   let sortedArray = [];
  
//   array.forEach((item) => {
//     if(item.length >= minLength && item.length <= maxLength) {
//       sortedArray.push(item);
//     }
//   });
  
//   console.log(sortedArray);
// }

// filterByLength(fruits, 5, 6);

function filterByLength(array, minLength, maxLength) {
  return array.filter(function(item) {
    return item.length >= minLength && item.length <= maxLength;  
  });
}
                      
console.log(filterByLength(fruits, 6, 6));