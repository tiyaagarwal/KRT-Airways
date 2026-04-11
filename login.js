const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

function goToSignup() {
    window.location.href = "signup.html";
}

function forgotPassword() {
    alert("Password reset link sent");
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if (!emailRegex.test(email)) {
        alert("Enter valid email");
        return; 
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be strong");
        return;
    }

    window.location.href = "home.html";
});