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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex-grow max-w-screen-lg">
        {recipe && (
          <div key={recipe.id} className='top-recipe-page'>
            <div className="flex flex-wrap items-start justify-center">
              <img src="pancakes.png" className="image-container" style={{ width: '425px', height: 'auto', maxWidth: '325px', maxHeight: '325px', marginRight: '20px', marginTop: '20px' }} />
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-black title title-recipe-page">{recipe.title}</h1>
                <div className="recipe-description-box">
                  <p className="description-recipe-page">{recipe.description}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="w-1/3 pr-2">
                <FontAwesomeIcon icon={fasClock} className="sizing" />
                <div className="text-center">
                  <label className="block mb-2">Prep Time</label>
                  <p>{recipe.preparation_time}</p>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <FontAwesomeIcon icon={faClock} className="sizing" />
                <div className="text-center">
                  <label className="block mb-2">Cook Time</label>
                  <p>{recipe.cooking_time}</p>
                </div>
              </div>
              <div className="w-1/3 pl-2">
                <FontAwesomeIcon icon={faUsers} className="sizing" />
                <div className="text-center">
                  <label className="block mb-2">Servings</label>
                  <p>{recipe.servings}</p>
                </div>
              </div>
            </div>
            <div className="instructions">
              <h1 className='Instr'>Instructions</h1>
              {recipe.instructions.map((instruction, index) => (
                <div key={index}>
                  <div className="mt-3">
                    <label className='steps2 font-bold uppercase'>STEP {index + 1}</label>
                    <p>{instruction}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ingredients">
              <h1 className="block mb-2 ingre-text-style">Ingredients</h1>
              {recipe.ingredients.map((ingredient, index) => (
                <div className="mt-3">
                  <p key={index}>{ingredient}</p>
                </div>
              ))}
            </div>
            <div className="tools">
              <h1 className="block mb-2 ingre-text-style">Tools</h1>
              {recipe.tools.map((tool, index) => (
                <div className="mt-3">
                  <p className='text-tools' key={index}>{tool}</p>
                </div>
              ))}
            </div>
            <span className="whitespace">white space</span>
          </div>
        )}
      </div>
    </div >
  );
}
