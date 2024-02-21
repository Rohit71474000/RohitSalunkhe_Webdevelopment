function showAlert() {
    alert("Hello, world!");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var errorMessage = "";

    if (name === "") {
        errorMessage += "Name is required.<br>";
    }

    if (email === "") {
        errorMessage += "Email is required.<br>";
    } else if (!isValidEmail(email)) {
        errorMessage += "Invalid email address.<br>";
    }

    if (errorMessage !== "") {
        document.getElementById("error-message").innerHTML = errorMessage;
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
