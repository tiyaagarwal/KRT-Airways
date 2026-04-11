let bookingId = "BK" + Math.floor(Math.random() * 100000);

document.getElementById("bookingId").innerText =
    "Booking ID: " + bookingId;

let flightName = localStorage.getItem("flightName");
let flightPrice = localStorage.getItem("flightPrice");

let from = localStorage.getItem("from");
let to = localStorage.getItem("to");

let seats = JSON.parse(localStorage.getItem("seats"));
let passengers = JSON.parse(localStorage.getItem("passengers"));

document.getElementById("flight").innerText =
    flightName + " | " + from + " → " + to;

let pDiv = document.getElementById("passengers");

for (let i = 0; i < passengers.length; i++) {

    let p = passengers[i];

    let pText = document.createElement("p");
    pText.innerText = p.name + " (" + p.gender + ", Age " + p.age + ")";

    pDiv.appendChild(pText);
}

document.getElementById("seats").innerText =
    seats.join(", ");

let total = flightPrice * passengers.length;

document.getElementById("price").innerText =
    "₹" + total;

function goHome() {
    window.location.href = "home.html";
}