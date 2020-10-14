// Написать функцию для подсчета количества букв в слове

// Single word
let wordForCount = " Hello ";

function countLetters (stringForCount) {
  stringForCount = stringForCount.trim();
  console.log(stringForCount.length);
}

countLetters(wordForCount);



// Sentence
let sentenceForCount = " Hello  world! ";

function countWordsNumber(sentence) {
  sentence = sentence.trim();
  let arrayOfWords = sentence.split(/\ +/);
  
  for(let i = 0; i < arrayOfWords.length; i++) {
    let wordLength = arrayOfWords[i].length;
    console.log(`${arrayOfWords[i]}: количество букв - ${wordLength}`);
  }
}

countWordsNumber(sentenceForCount);