// login.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting the usual way

    // Get the username and password field values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation (you can extend this with server-side authentication)
    if (username === "" || password === "") {
        alert("Please enter both username and password!");
        return;
    }

    // For demonstration purposes, this will check for hardcoded credentials (you can replace this with an actual server check)
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "Text-to-speech.html"; // Redirect to dashboard page after successful login
    } else {
        alert("Invalid username or password!");
    }
});
