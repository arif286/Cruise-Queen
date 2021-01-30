 //First class ticket Price.
 document.getElementById('first-Increment').addEventListener('click', function () {
    eventManager('first', true);
})
document.getElementById('first-Decrement').addEventListener('click', function () {
    eventManager('first', false);
})
//Economy ticket Price.
document.getElementById('economy-Increment').addEventListener('click', function () {
    eventManager('economy',true);
})
document.getElementById('economy-Decrement').addEventListener('click', function () {
    eventManager('economy',false);
})

//function
function eventManager(ticket, priceIncrease) {
    const ticketInput = document.getElementById(ticket + '-Input');
    let ticketNumber = parseInt(ticketInput.value);
    if (priceIncrease == true) {
        ticketNumber++;
    }
    if (priceIncrease == false && ticketNumber > 0) {
        ticketNumber--;
    }
    let ticketTotal = 0;
    document.getElementById(ticket + '-Input').value = ticketNumber;
    if (ticket == 'first') {
        ticketTotal = ticketNumber * 150;
    }
    if ( ticket == 'economy'){
        ticketTotal = ticketNumber * 100;
    }
    calculateTotal();
}

//calculation subtotal, vat and grand total
function calculateTotal() {
    const subTotal = document.getElementById('subTotal').innerText;
    const firstInput = document.getElementById('first-Input').value;
    const economyInput = document.getElementById('economy-Input').value;

    const subTotalAmount = firstInput * 150 + economyInput * 100;

    document.getElementById('subTotal').innerText = '$' + subTotalAmount;
    const vat = document.getElementById('vat').innerText;
    const totalVat = subTotalAmount * 0.1;
    document.getElementById('vat').innerText = '$' + totalVat;
    const totalPrice = document.getElementById('totalPrice').innerText;
    const grandTotal = subTotalAmount + totalVat;
    document.getElementById('totalPrice').innerHTML = '$' + grandTotal;
}


// Booking button
document.querySelector('.btn-style').addEventListener('click', function () {
   const bookingArea = document.querySelector('.Greet-card');
   bookingArea.style.display = 'block';
})

document.querySelector('.join-btn').addEventListener('click',function(){
    document.querySelector('.Greet-card').style.display = 'none';
})