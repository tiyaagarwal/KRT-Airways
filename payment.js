let cardRegex = /^\d{16}$/;
let cvvRegex = /^\d{3}$/;
let nameRegex = /^[A-Za-z ]{2,50}$/;

document.getElementById("card").addEventListener("input", function(e) {

    let value = e.target.value.replace(/\s/g, ""); 

   
    value = value.replace(/\D/g, "");

    let formatted = "";
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += " ";
        }
        formatted += value[i];
    }

    e.target.value = formatted;
});

function payNow() {

    let card = document.getElementById("card").value.replace(/\s/g, ""); 
    let expiry = document.getElementById("expiry").value;
    let cvv = document.getElementById("cvv").value.trim();
    let name = document.getElementById("name").value.trim();

    if (!cardRegex.test(card)) {
        alert("Enter valid 16-digit card number");
        return;
    }

    if (expiry === "") {
        alert("Select expiry date");
        return;
    }

    if (!cvvRegex.test(cvv)) {
        alert("Enter valid CVV");
        return;
    }

    if (!nameRegex.test(name)) {
        alert("Enter valid name");
        return;
    }

    document.getElementById("loader").classList.remove("hidden");

    setTimeout(function () {
        window.location.href = "confirmation.html";
    }, 2000);
}