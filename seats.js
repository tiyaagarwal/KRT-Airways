let adult = parseInt(localStorage.getItem("adult")) || 1;
let child = parseInt(localStorage.getItem("child")) || 0;

let totalPassengers = adult + child;

document.getElementById("info").innerText =
    "Passengers: " + adult + " Adults, " + child + " Children";

let container = document.getElementById("seats");

let selectedSeats = [];

let rows = 6;
let seatsPerRow = ["A","B","C","D","E","F"];

for (let i = 1; i <= rows; i++) {

    let rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let j = 0; j < seatsPerRow.length; j++) {

        if (j === 3) {
            let aisle = document.createElement("div");
            aisle.className = "aisle";
            rowDiv.appendChild(aisle);
        }

        let seatNum = i + seatsPerRow[j];

        let seat = document.createElement("div");
        seat.className = "seat";
        seat.innerText = seatNum;

      
        if ((i + j) % 4 === 0) {
            seat.classList.add("booked");
        }

        seat.onclick = function () {

            if (seat.classList.contains("booked")) return;

            if (!seat.classList.contains("selected")) {

                if (selectedSeats.length >= totalPassengers) {
                    alert("Select only " + totalPassengers + " seats");
                    return;
                }

                seat.classList.add("selected");
                selectedSeats.push(seatNum);

            } else {
                seat.classList.remove("selected");
                selectedSeats = selectedSeats.filter(s => s !== seatNum);
            }

            updateCount();
        };

        rowDiv.appendChild(seat);
    }

    container.appendChild(rowDiv);
}

function updateCount() {
    document.getElementById("count").innerText =
        "Selected Seats: " + selectedSeats.length + "/" + totalPassengers;
}

function proceed() {

    if (selectedSeats.length !== totalPassengers) {
        alert("Select seats for all passengers");
        return;
    }

    localStorage.setItem("seats", JSON.stringify(selectedSeats));

    window.location.href = "passenger.html";
}