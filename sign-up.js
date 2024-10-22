// sign-up.js

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form field values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Assuming a success for the demo. In a real-world scenario, you'd send this data to a server using AJAX/Fetch.
    alert("Sign-up successful for " + username + " with email " + email);
    
    // After a successful form submission, redirect to Text-to-speech page
    window.location.href = "./Text-to-speech.html";
});
