// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: 'smth', length: 1, isCapitalized: false} 

let enteredWord = " Hello  ";

function WordObject(text) {
  this.word = text.trim();
  this.length = text.trim().length;
  this.isCapitalized = text === text.toUpperCase() ? true : false;
}

let text1 = new WordObject(enteredWord);

console.log(text1);