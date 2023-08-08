/*
1. If ticket number is less than 100, per ticket price: 100
2. If ticket number is more than 100 but less then 200, first 100 ticket will be 100/ticket. Rest ticket will be 90taka/ticket.
3.if you purces more than 200 tickets
first 100----> 100 taka
101-200------> 90 taka
200+ --------> 70 taka
*/ 

function ticketPrice(ticketquantity){
    const first100Rate = 100;
    const secons100Rate = 90;
    const restTicketRate = 70;
    if(ticketquantity <= 100){
        const price = ticketquantity * first100Rate;
        return price;
    }
    else if(ticketquantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity= ticketquantity  - 100;
        const restTicketPrice = restTicketQuantity * secons100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * secons100Rate;
        const restTicketQuantity = ticketquantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;

        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;

    }
}

const Quantity = 220;
const price = ticketPrice(Quantity);
console.log(price)