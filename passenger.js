let adult = parseInt(localStorage.getItem("adult")) || 1;
let child = parseInt(localStorage.getItem("child")) || 0;

let total = adult + child;

let container = document.getElementById("form-container");


let nameRegex = /^[A-Za-z ]{2,50}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phoneRegex = /^[6-9]\d{9}$/;


for (let i = 1; i <= total; i++) {

    let div = document.createElement("div");
    div.className = "passenger-box";

    div.innerHTML = `
        <h3>Passenger ${i}</h3>

        <label>Full Name</label>
        <input type="text" id="name${i}">

        <label>Age</label>
        <input type="number" id="age${i}">

        <label>Gender</label>
        <select id="gender${i}">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
        </select>

        <label>Email</label>
        <input type="text" id="email${i}">

        <label>Phone Number</label>
        <input type="text" id="phone${i}">
    `;

    container.appendChild(div);
}

function submitDetails() {

    let passengers = [];

    for (let i = 1; i <= total; i++) {

        let name = document.getElementById("name"+i).value.trim();
        let age = document.getElementById("age"+i).value;
        let gender = document.getElementById("gender"+i).value;
        let email = document.getElementById("email"+i).value.trim();
        let phone = document.getElementById("phone"+i).value.trim();

        if (!nameRegex.test(name)) {
            alert("Enter valid name for passenger " + i);
            return;
        }

        if (age === "" || age <= 0) {
            alert("Enter valid age for passenger " + i);
            return;
        }

        if (gender === "") {
            alert("Select gender for passenger " + i);
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Enter valid email for passenger " + i);
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert("Enter valid phone number for passenger " + i);
            return;
        }

        passengers.push({
            name: name,
            age: age,
            gender: gender,
            email: email,
            phone: phone
        });
    }

    localStorage.setItem("passengers", JSON.stringify(passengers));

    window.location.href = "payment.html";
}