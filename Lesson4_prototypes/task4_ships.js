const ShipYard = function() {
  let createdId = [];
  let shipId;
  let existingBoats = [];
  this.existingBoats = existingBoats;
    
  this.createId = function() {
    shipId = Math.floor(100 + Math.random() * 100);
    if(!(createdId.some((item) => item === shipId))) {
      createdId.push(shipId);
      return shipId;
    } else this.createdId();
  }

  this.newBoat = function(obj) {
    obj.id = this.createId();
    obj.color = 'standart';
    obj.repared = false;
    console.log(`You\`ve just created a new ${obj.type}boat, id = ${obj.id}`);
    existingBoats.push(obj);
  }

  this.repaint = function(param1, param2, color) {
    this.changeBoat(param1, param2, color, 'color');
  }

  this.repairBoat = function(param1, param2) {
    this.changeBoat(param1, param2, true, 'repared');
  }

  this.barterShip = function(param1, param2) {
    this.changeBoat(param1, param2, true, 'renewed');
  }
}

ShipYard.prototype.changeBoat = function(param1, param2, changedValue, changedParam) {
  this.checkData(param1, param2);
  this.existingBoats.forEach(function(item) {
    if(Object.values(item).some((elem) => elem === param1) && Object.values(item).some((elem) => elem === param2)) {
      item[changedParam] = changedValue;
      console.log(item)
    } else console.log('The ship wasn\'t found!');
  })
}

ShipYard.prototype.checkData = function(param1, param2) {
  if(!(param1 && param2)) {
      console.log('Not enough data to identify the ship');
      return;
    } 
  if((this.type === 'motor' && (typeof param1 !== 'number' || typeof param2 !== 'string')) || (this.type === 'sail' && (typeof param1 !== 'number' || typeof param2 !== 'number'))) {
    console.log('The data is incorrect');
    return;
  }
}

const ShipYardForMotorboats = function() {
  this.createShip = function(engineCapacity, caseMaterial) {
    let newShip = new MotorBoat(engineCapacity, caseMaterial);
    this.newBoat(newShip);
  }
}

const ShipYardForSailboats = function() {
  this.createShip = function(mastNumber, sailArea) {
    let newShip = new SailBoat(mastNumber, sailArea);
    this.newBoat(newShip);
  }
}

let MotorBoat = function(engineCapacity, caseMaterial) {
  this.type = 'motor';
  this.engineCapacity = engineCapacity;
  this.caseMaterial = caseMaterial;
}

let SailBoat = function(mastNumber, sailArea) {
  this.type = 'sail';
  this.mastNumber = mastNumber;
  this.sailArea = sailArea;
}

ShipYardForMotorboats.prototype = new ShipYard();
ShipYardForSailboats.prototype = new ShipYard();
MotorBoat.prototype = new ShipYardForMotorboats();
SailBoat.prototype = new ShipYardForSailboats();

const newMotorBoat = new MotorBoat();
const newSailBoat = new SailBoat();

newMotorBoat.createShip(10, 'metal');
newMotorBoat.createShip(15, 'metal');
newSailBoat.createShip(5, 100);
newSailBoat.createShip(2, 40);
newMotorBoat.repairBoat(15, 'metal');
newSailBoat.repairBoat(5, 100);
newMotorBoat.repaint(10, 'metal', 'red');
newSailBoat.repaint(5, 100, 'green');
newMotorBoat.barterShip(15, 'metal');
newSailBoat.barterShip(2, 40);
console.log(newMotorBoat.existingBoats);
console.log(newSailBoat.existingBoats);
