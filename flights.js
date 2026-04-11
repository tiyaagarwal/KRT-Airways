let from = localStorage.getItem("from");
let to = localStorage.getItem("to");
let adult = parseInt(localStorage.getItem("adult"));
let child = parseInt(localStorage.getItem("child"));

document.getElementById("route").innerText = from + " → " + to;
document.getElementById("info").innerText =
  "Passengers: " + adult + " Adults, " + child + " Children";

let cities = ["Chennai", "Delhi", "Mumbai", "Bangalore", "Hyderabad"];


let blockedRoutes = [
  "Chennai-Hyderabad",
  "Delhi-Mumbai"
];


let allFlights = [];

for (let i = 0; i < cities.length; i++) {
  for (let j = 0; j < cities.length; j++) {

    if (i === j) continue; // skip same city

    let routeKey = cities[i] + "-" + cities[j];

    
    if (blockedRoutes.includes(routeKey)) continue;

    
    allFlights.push({
      name: "IndiGo",
      from: cities[i],
      to: cities[j],
      time: "9:00 AM",
      price: 3000 + Math.floor(Math.random() * 2000)
    });

    allFlights.push({
      name: "Air India",
      from: cities[i],
      to: cities[j],
      time: "3:00 PM",
      price: 3500 + Math.floor(Math.random() * 2000)
    });
  }
}


let container = document.getElementById("flights");

let found = false;


for (let i = 0; i < allFlights.length; i++) {

  let f = allFlights[i];

  if (f.from === from && f.to === to) {

    found = true;

    let total = f.price * adult;

    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${f.name}</h3>
      <p>${f.from} → ${f.to}</p>
      <p>${f.time}</p>
      <h2>₹${f.price}</h2>
      <p>Total: ₹${total}</p>
      <button onclick="selectFlight('${f.name}', ${f.price})">Select</button>
    `;

    container.appendChild(div);
  }
}


if (!found) {
  container.innerHTML = "<h3>No flights available</h3>";
}


function selectFlight(name, price) {
  localStorage.setItem("flightName", name);
  localStorage.setItem("flightPrice", price);

  window.location.href = "seats.html";
}