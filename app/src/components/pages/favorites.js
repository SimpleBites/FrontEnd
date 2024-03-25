import React, { useState, useEffect } from 'react';

export default function Favorites() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="favorites-container">
      <h1 className="text-3xl font-bold mb-4">Favorite Recipes</h1>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe, index) => (
          <a key={index} href={`/${recipe.category_id}`} className="flex flex-col items-center">
            <img src={recipe.image} alt={recipe.title} className="object-cover" style={{ width: '225px', height: '225px', marginRight: '5px' }}/>
            <div className="text-center">
              <h2 className="">{recipe.title}</h2>
              {/* <p className="mb-2">{recipe.description}</p>
              <p className="mb-2">Average Score: {recipe.average_score}</p>
              <p>Difficulty: {recipe.difficulty}</p> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
