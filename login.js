document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded validation - replace with actual logic
    if (username === "admin" && password === "password123") {
        // If username and password match, redirect to the Text-to-Speech page
        window.location.href = "Text-to-speech.html";
    } else {
        // If credentials are incorrect, show an error message
        alert("Invalid username or password. Please try again.");
    }

    // const button=document.getElementById('login');
    // button.addEventListener('click',()=>{
    //     window.location.href="Text-To-speech.html";
    // })
});
