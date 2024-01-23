/*
1-100tickek price = 100tk;
101-200 ticket price = 90tk;
200+ ticket price =70tk;
*/ 
function ticketPrice(ticketQuantity){
    const first100TicketPrice = 100;
    const second100TicketPrice =90;
    const restTicketPrice = 70;
    if(ticketQuantity<=100){
        const first100TicketPriceTotal = ticketQuantity*first100TicketPrice; 
        return first100TicketPriceTotal;
    }else if(ticketQuantity<=200){
        const first100Price = 100 * first100TicketPrice;
        const rest100Qty = ticketQuantity - 100;
        const second100TicketPriceTotal = first100Price + (rest100Qty*90);
        return second100TicketPriceTotal
    }else{
        const first100Price = 100* first100TicketPrice;
        const second100Price = 100* second100TicketPrice;
        const restQty = ticketQuantity -200;
        const restTicketPriceTotal = first100Price + second100Price + (restQty * restTicketPrice);
        return restTicketPriceTotal;
    }
}
const result = ticketPrice(220);
console.log(result);