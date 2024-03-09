// Form Validation
document.getElementById("signup-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    
    // Basic validation
    if (name === "" || email === "" || phone === "" || password === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
    } else if (!isValidPhoneNumber(phone)) {
        alert("Please enter a valid phone number.");
        event.preventDefault(); // Prevent form submission
    }
});

// Helper function to validate email address
function isValidEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Helper function to validate phone number
function isValidPhoneNumber(phone) {
    var regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phone);
}

// Display confirmation message after successful form submission
document.getElementById("signup-form").addEventListener("submit", function() {
    alert("GREAT JOB!Let's enjoy a vegan meal");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
