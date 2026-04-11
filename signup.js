const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const nameRegex = /^[A-Za-z ]{2,50}$/;

function goToLogin() {
    window.location.href = "index.html";
}

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm = document.getElementById("confirmPassword").value.trim();

    if (!nameRegex.test(name)) {
        alert("Enter valid name");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter valid email");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Enter valid phone number");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be strong");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    
    window.location.href = "index.html";
});