let purchaseButton = document.getElementById("purchaseButton");
let eTicketRadio = document.getElementById("eticket");
let phoneRadio = document.getElementById("phone");
let postRadio = document.getElementById("post");

let movieChoice= document.getElementById("movies");
let movie = movieChoice.options[movieChoice.selectedIndex];

const txtOutput = document.getElementById("output1");
const txtOutput2 = document.getElementById("output2");

const alldeliveryoptions = document.querySelectorAll("input[name='delivery']");

purchaseButton.addEventListener("click", purchaseClicked);
movieChoice.addEventListener("change",displaychoice);

let movieName; 
let moviePrice;

for (let i = 0; i < alldeliveryoptions.length; i++) {
    alldeliveryoptions[i].addEventListener("change", checkPreference);
    
}

function checkPreference() {
    txtOutput.innerText = "Delivery Charges: " + this.value;
}

function displaychoice(){
    movie = movieChoice.options[movieChoice.selectedIndex];
    moviePrice = movie.value;
    movieName = movie.text;
    txtOutput2.innerText = "MoviePrice:£ " + moviePrice;
}

function purchaseClicked() { 
    let totalNoDiscount = 0;
    let discountPercent = 0;
    let discountAmount = 0;
    let totalWithDiscount = 0;
    let deliveryMethod = "";
    let deliveryCharges = 0;

    moviePrice = movie.value;
    movieName = movie.text;

    let numberOfTickets = document.getElementById("numberoftickets").value;
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;


    //*^variable delcared after event listener^*//

    totalNoDiscount = moviePrice * numberOfTickets;

    if (numberOfTickets >= 6 && numberOfTickets < 10) {
        discountPercent = 10;
        discountAmount = totalNoDiscount * 0.1;
        totalWithDiscount = totalNoDiscount - discountAmount;


    } else if (numberOfTickets >= 10) {
        discountPercent = 15;
        discountAmount = totalNoDiscount * 0.15;
        totalWithDiscount = totalNoDiscount - discountAmount;
    }

    if (eTicketRadio.checked) {
        deliveryMethod = "eTicket";
    }
    else if (phoneRadio.checked) {
        deliveryMethod = "Collection from booth";
        deliveryCharges = 1.50;
    } else if (postRadio.checked) {
        deliveryMethod = "Post";
        deliveryCharges = 3.99;
    }

    document.getElementById("output").innerHTML =
        "Single Ticket:" + moviePrice + "<br>" +
        numberOfTickets + " tickets for " + movieName
        + "<br>Total cost: £ " + totalNoDiscount.toFixed(2)
        + "<br>" + discountPercent + "% discount: £ " + discountAmount.toFixed(2)
        + "<br>" + deliveryMethod + "        £ " + deliveryCharges.toFixed(2)
        + "<br>Final Cost: £ " + (totalNoDiscount + deliveryCharges).toFixed(2)
        + "<br>Buyers Name : " + name
        + "<br>Billing Address : " + address;
    }

