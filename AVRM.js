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

// function to validate email address
function isValidEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// function to validate phone number
function isValidPhoneNumber(phone) {
    var regex = /^\d{1,4}-\d{3}-\d{3}-\d{4}$/;
    return regex.test(phone);
}

// Display confirmation message after successful form submission
document.getElementById("signup-form").addEventListener("submit", function() {
    alert("GREAT JOB! Now let's enjoy a vegan meal");
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
// Function to check if the user is signed in
function isUserSignedIn() {
    // Implement your logic to check if the user is signed in
    // For demonstration purposes, let's assume a variable isSignedIn is set to true if the user is signed in
    var isSignedIn = true;
    return isSignedIn;
}
// JavaScript to toggle visibility of the signup form when the signup link is clicked
document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Toggle visibility of the signup form container
    var signupFormContainer = document.getElementById('signup-form-container');
    signupFormContainer.classList.toggle('hidden');
});


// Function to show or hide the generator section based on sign-in status
function toggleGeneratorVisibility() {
    var generatorSection = document.getElementById("generator");
    
    // Check if the user is signed in
    if (isUserSignedIn()) {
        generatorSection.style.display = "block"; // Show the generator section
    } else {
        generatorSection.style.display = "none"; // Hide the generator section
    }
}

// Call the function to initially toggle visibility
toggleGeneratorVisibility();

// Function to handle form submission and display recipes
document.getElementById("generator-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user input from the form
    var dishType = document.getElementById("dish-type").value;
    var cookingTime = document.getElementById("cooking-time").value;
    var skillsLevel = document.getElementById("skills-level").value;
    var kitchenType = document.getElementById("kitchen-type").value;
    var ingredients = document.getElementById("ingredients").value;
    var allergies = document.getElementById("allergies").value;
    var restrictions = document.getElementById("restrictions").value;

    // Implement logic to generate recipes based on user input
    var generatedRecipes = generateRecipes(dishType, cookingTime, skillsLevel, kitchenType, ingredients, allergies, restrictions);

    // Display the generated recipes on the webpage
    displayRecipes(generatedRecipes);
});

// Function to generate recipes based on user input
function generateRecipes(dishType, cookingTime, skillsLevel, kitchenType, ingredients, allergies, restrictions) {
    // Implement your recipe generation logic here based on the user input
    // For demonstration purposes, let's assume some dummy recipes are generated
    var generatedRecipes = [
        { name: "Recipe 1", description: "Description of Recipe 1" },
        { name: "Recipe 2", description: "Description of Recipe 2" },
        { name: "Recipe 3", description: "Description of Recipe 3" }
    ];
    return generatedRecipes;
}

// Function to display the generated recipes on the webpage
function displayRecipes(recipes) {
    var recipesContainer = document.getElementById("recipes-container");

    // Clear any existing recipes
    recipesContainer.innerHTML = "";

    // Loop through the generated recipes and create HTML elements to display them
    recipes.forEach(function(recipe) {
        var recipeElement = document.createElement("div");
        recipeElement.classList.add("recipe");
        recipeElement.innerHTML = "<h3>" + recipe.name + "</h3><p>" + recipe.description + "</p>";
        recipesContainer.appendChild(recipeElement);
    });
}

// Function to check if the user is signed in and populate comment form
function populateCommentForm() {
    // Check if the user is signed in
    if (isUserSignedIn()) {
        // Get the signed-in user's information (replace these with actual user data)
        var signedInUserName = "user name";
        var signedInUserEmail = "user@email.com";

        // Populate the name and email fields in the comment form
        document.getElementById("comment-name").value = signedInUserName;
        document.getElementById("comment-email").value = signedInUserEmail;
    }
}

// Call the function to populate the comment form when the page loads
populateCommentForm();

