//     С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр 


let Rectangle = function() {
  this.calculatePerimetr = function(w, h) {
    return (w * 2) + (h * 2);
  }
  
};
let Square = function() {
  this.calculateSquare = function(w, h) {
    return w * h;
  }
}
Rectangle.prototype = new Square();
Square.prototype = new Rectangle();

let calculate = new Square();

console.log(calculate.calculatePerimetr(10, 15));
console.log(calculate.calculateSquare(10, 15));