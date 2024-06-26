import React, { useState, useEffect } from 'react';
import './footer.css';
import FavoriteButton from '../FavoriteButton';
import CustomLink from '../CustomLink';

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
    <div className="container mx-auto px-8"> 
      <div className="favorites-container">
        <h1 className="favorite">Favorite Recipes</h1>
        <span className="block favorite-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in. Quis commodo odio aenean sed adipiscing diam donec adipiscing.</span>
        <div className="grid grid-cols-4 gap-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="flex flex-col items-center">
               <FavoriteButton isFavorite={recipe.favorite} onToggle={() => console.log("Toggle favorite")} />
              <CustomLink to={`/recipe/${recipe.category_id}`}>
                <img src={recipe.image} alt={recipe.title} className="object-cover" style={{ width: '275px', height: '275px', margin: '5px', marginBottom: '10px' }} /> 
                <div className="text-center">
                  <h2 className="">{recipe.title}</h2>
                  {/* <p className="mb-2">{recipe.description}</p>
                  <p className="mb-2">Average Score: {recipe.average_score}</p>
                  <p>Difficulty: {recipe.difficulty}</p> */}
                </div>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
