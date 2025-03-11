// Save Recipe to LocalStorage
document.getElementById('recipeForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let recipeName = document.getElementById('recipeName').value;
    let ingredients = document.getElementById('ingredients').value;
    let instructions = document.getElementById('instructions').value;

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push({ recipeName, ingredients, instructions });

    localStorage.setItem('recipes', JSON.stringify(recipes));
    alert('Recipe added!');
    this.reset();
});

// Display Recipes on View/Delete Page
document.addEventListener('DOMContentLoaded', function() {
    let recipesList = document.getElementById('recipesList');
    if (recipesList) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (recipes.length === 0) {
            recipesList.innerHTML = '<p>No recipes available.</p>';
        } else {
            recipes.forEach((recipe, index) => {
                recipesList.innerHTML += `
                    <div class="recipe">
                        <h3>${recipe.recipeName}</h3>
                        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                        <button onclick="deleteRecipe(${index})">Delete Recipe</button>
                    </div>
                    <hr>
                `;
            });
        }
    }
});

// Delete Recipe
function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    location.reload(); // Reload the page to update the list
}

// Save Profile Info
document.getElementById('profileForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    let profile = { username, email };
    localStorage.setItem('profile', JSON.stringify(profile));

    displayProfile();
    alert('Profile saved!');
});

// Display Profile Info
function displayProfile() {
    let profile = JSON.parse(localStorage.getItem('profile'));
    let profileDisplay = document.getElementById('profileDisplay');
    
    if (profile && profileDisplay) {
        profileDisplay.innerHTML = `
            <h3>Your Information</h3>
            <p><strong>Name:</strong> ${profile.username}</p>
            <p><strong>Email:</strong> ${profile.email}</p>
        `;
    }
}

// Auto Display Profile on Load
document.addEventListener('DOMContentLoaded', displayProfile);
