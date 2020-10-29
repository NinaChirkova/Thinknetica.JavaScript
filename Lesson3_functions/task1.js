// Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
//     addCoin - Добавляет 1 монету в копилку 
//     getAmount - Возвращает количество монет в копилке 
// Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

// Пример:  
// const box = new MoneyBox();

// box.getAmount(); // 0
// box.addCoin();
// box.addCoin();
// box.getAmount(); // 2

function MoneyBox() {
  let coinsAmount = 0;
   function calculateCoins(val) {
     coinsAmount += val;
   }
  
  return {
    addCoin: function() {
      calculateCoins(1)
    },
    getAmount: function() {
      console.log(coinsAmount);
    }
  }
};

const box = new MoneyBox();

box.getAmount();
box.addCoin();
box.addCoin();
box.getAmount();