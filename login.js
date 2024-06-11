document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add your login validation logic here
    // For demonstration, let's just check if both fields are filled
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
    } else {
        // You can redirect the user to the main page after successful login
        window.location.href = "home.html";
    }
});
