// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент 

// let comparedArray1 = [5, 15, 10, 98, 65];
// let comparedArray2 = [8, 2, 16, 100, 71];

// function compareNumbers(val1, val2) {
//   if(val1 > val2) {
//     console.log(`${val1} > ${val2}`);
//   } else if(val1 < val2) {
//     console.log(`${val1} < ${val2}`);
//   } else {
//     console.log(`${val1} = ${val2}`);
//   }
// }

// function compare(array1, array2) {
//   for(let i = 0; i < array1.length; i++) {
//     compareNumbers(array1[i], array2[i]);    
//   }
// }

// compare(comparedArray1, comparedArray2);



let comparedArray3 = [5, 15, 10, 98, 65];
let comparedArray4 = [5, 15, 10, 98, 65];

// function compareValues(val1, val2) {
//   return val1 === val2;
// }

function compare(array1, array2) {
  if(array1.length != array2.length) {
    console.log("Arrays don't match!");
    return;
  }
  (array1.every((item, index) => item === array2[index])) ? console.log("Arrays are even!") : console.log("Arrays are not even!");
  }

compare(comparedArray3, comparedArray4);
