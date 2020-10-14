// Написать функцию для реверсии слова не используя встроенные методы

let stringToReverse = 'terrarium';

function reverseString(text) {
  text = text.trim().split('')
  let reversedStringArray = [];
  
  for(let i=text.length; i>=0; i--) {
    reversedStringArray.push(text[i]);
  }
  console.log(reversedStringArray.join(''));
}

reverseString(stringToReverse);