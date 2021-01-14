// Система продажи билетов 

// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */

// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

const TicketLand = function() {
  let events = [];
  let cash = 0;
  let soldTickets = [];
  let ticketOrder = {};
  
  function checkEventsCache(str) {
    return events.some((item) => item.event == str.trim());
  }  
  function collectCash(price) {
    cash += price;
  }
  
  this.createEvent = function(str, sum) {
    if(typeof str != "string" || typeof sum != "number") {
      console.log(" Input is invalid ");
      return false;
    };
    if(checkEventsCache(str)) {
      console.log('Event already exists');
      return;
    }      
    events.push({event: str.trim(), price: sum});      
  };
  
  this.buyTicket = function(str) {
    let findEvent = events.find((item) => item.event == str.trim());
    let ticketId = Math.floor(100000 + Math.random() * 9000);
    
    if(!checkEventsCache(str)) {
      console.log('There\'s no such event!');
    };
    soldTickets.push({event: findEvent.event, price: findEvent.price, ticketId: ticketId});
    collectCash(findEvent.price);
    console.log(`You've succesfully bought a ticket for ${findEvent.event}, your ticket ID is ${ticketId}`);
    // console.log(soldTickets);
    // console.log(cash);    
  };
  
  this.returnTicket = function(id) {
    let ticketIndex = soldTickets.findIndex((item) => item.ticketId === id);
    if(ticketIndex !== -1) {
      soldTickets.splice(ticketIndex, 1);      
    } else {
      console.log("Wrong ticket Id");
    }
    // console.log(soldTickets);
    // console.log(cash);
  }

};

let ticketWindow = new TicketLand();

ticketWindow.createEvent('Concert', 500);
ticketWindow.createEvent('Play', 700);
ticketWindow.createEvent('Play', 700);

ticketWindow.buyTicket('Concert');
ticketWindow.buyTicket('Concert');
ticketWindow.buyTicket('Play');