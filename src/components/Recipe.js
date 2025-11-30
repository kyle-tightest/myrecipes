import React, { useState, useEffect } from 'react';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState('');
  const [newRecipeInstructions, setNewRecipeInstructions] = useState('');

  useEffect(() => {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredients = newRecipeIngredients.split(',').map(item => item.trim());
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newRecipeName,
        ingredients,
        instructions: newRecipeInstructions,
      }),
    })
      .then(res => res.json())
      .then(newRecipe => {
        setRecipes([...recipes, newRecipe]);
        setNewRecipeName('');
        setNewRecipeIngredients('');
        setNewRecipeInstructions('');
      });
  };

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
      <h3>Add a new recipe</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={newRecipeName}
          onChange={(e) => setNewRecipeName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Ingredients (comma-separated)"
          value={newRecipeIngredients}
          onChange={(e) => setNewRecipeIngredients(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Instructions"
          value={newRecipeInstructions}
          onChange={(e) => setNewRecipeInstructions(e.target.value)}
        />
        <br />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default Recipe;
