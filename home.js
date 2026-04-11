
let adult = 1;
let child = 0;


const today = new Date().toISOString().split("T")[0];


window.onload = function () {
    document.getElementById("date").setAttribute("min", today);
};

function incAdult() {
    adult++;
    document.getElementById("adult").innerText = adult;
}

function decAdult() {
    if (adult > 1) {
        adult--;
        document.getElementById("adult").innerText = adult;
    }
}

function incChild() {
    child++;
    document.getElementById("child").innerText = child;
}

function decChild() {
    if (child > 0) {
        child--;
        document.getElementById("child").innerText = child;
    }
}

function searchFlights() {

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    // Validation checks
    if (from === "" || to === "") {
        alert("Select cities");
        return;
    }

    if (from === to) {
        alert("We checked the physics: you can’t arrive where you already are");
        return;
    }

    if (date === "") {
        alert("Select date");
        return;
    }

    // Prevent past date
    if (date < today) {
        alert("You cannot select a past date!");
        return;
    }

    if (adult < 1) {
        alert("At least 1 adult required");
        return;
    }

    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("date", date);
    localStorage.setItem("adult", adult);
    localStorage.setItem("child", child);

    window.location.href = "flights.html";
}