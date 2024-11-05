import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth, onAuthStateChanged } from "firebase/auth";
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw7TB5N7-9cVQL8TUuN7q1ZGsCPabPplE",
    authDomain: "login-example-5a836.firebaseapp.com",
    projectId: "login-example-5a836",
    storageBucket: "login-example-5a836.firebasestorage.app",
    messagingSenderId: "134410075424",
    appId: "1:134410075424:web:28ee7c00e71d3722cfeb45"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
``
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
const submit=document.getElementById('submit');

submit.addEventListener("click",function(event){
    event.preventDefault();
    alert($);
})