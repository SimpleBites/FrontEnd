import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock as fasClock, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default function Recipe() {
  const [recipe, setRecipe] = useState(null); 
  const id = 5; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data3.json');
        const data = await response.json();
        const filteredRecipe = data.recipes.find(recipe => recipe.id === id); 
        setRecipe(filteredRecipe); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]); 

  return (
    <div className="flex justify-center items-center h-screen">
      {recipe && (
        <div key={recipe.id} className='top-recipe-page'>
          <img src={recipe.image} style={{ width: '150px', height: '150px', marginRight: '1px', marginTop:'20px;' }} />
          <h1 className="text-3xl text-black">{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="w-1/3 pr-2">
            <FontAwesomeIcon icon={fasClock} className="sizing" />
            <label className="block mb-2">Prep Time</label>
            <p>{recipe.preparation_time}</p>
          </div>
          <div className="w-1/3 px-2">
            <FontAwesomeIcon icon={faClock} className="sizing" />
            <label className="block mb-2">Cook Time</label>
            <p>{recipe.cooking_time}</p>
          </div>
          <div className="w-1/3 pl-2">
            <FontAwesomeIcon icon={faUsers} className="sizing" />
            <label className="block mb-2">Servings</label>
            <p>{recipe.servings}</p>
          </div>
          <div className="instructions">
            <h1 className='Instr'>Instructions</h1>
            {recipe.instructions.map((instruction, index) => (
              <div key={index}>
                <label>STEP {index + 1}</label>
                <p>{instruction}</p>
              </div>
            ))}
          </div>
          <div className="ingredients">
            <h1>Ingredients</h1>
            {recipe.ingredients.map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </div>
          <div className="tools">
            <h1>Tools</h1>
            {recipe.tools.map((tool, index) => (
              <p key={index}>{tool}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
