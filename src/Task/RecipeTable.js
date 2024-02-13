import React from 'react';

const RecipeTable = ({ recipes, handleBookmark }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <tr key={index}>
            <td>{recipe.name}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instructions}</td>
            <td>
              <button onClick={() => handleBookmark(recipe)}>Bookmark</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTable;
