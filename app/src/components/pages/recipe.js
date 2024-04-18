import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock as FasClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import './footer.css';

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const id = 6;
  console.log(window.location.pathname);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recipes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
        console.log(data.data)
        const filteredRecipe = data.data.find(recipe => recipe.id === id);
        
      } catch (error) {
        console.error(error);
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
              <img src="pancakes.png" alt='hi' className="image-container" style={{ width: '425px', height: 'auto', maxWidth: '325px', maxHeight: '325px', marginRight: '20px', marginTop: '20px' }} />
              <div className="flex flex-col justify-left">
                <h1 className="text-black title title-recipe-page"></h1>
                <div className="recipe-description-box">
                  <p className="description-recipe-page"></p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="w-ful flex icons-placing-styling">
                <div className="w-1/3 pr-2 flex flex-col icons-padding3">
                  <FontAwesomeIcon icon={FasClock} className="sizing" />
                  <div className="text-center" style={{ paddingTop: '5px' }}>
                    <label className="block mb-2">Prep Time</label>
                    <p>{recipe.preparation_time}</p>
                  </div>
                </div>
                <div className="w-2/3 px-2 flex flex-col  icons-padding">
                  <FontAwesomeIcon icon={faClock} className="sizing" />
                  <div className="text-center" style={{ paddingTop: '5px' }}>
                    <label className="block mb-2">Cook Time</label>
                    <p>{recipe.cooking_time}</p>
                  </div>
                </div>

                <div className="w-2/3 flex flex-col  icons-padding2">
                  <FontAwesomeIcon icon={faUsers} className="sizing" />
                  <div className="text-center" style={{ paddingTop: '5px' }}>
                    <label className="block mb-2">Servings</label>
                    <p>{recipe.servings}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="instructions">
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 lg:col-span-1 order-2 lg:order-1">
                  <div className="mb-4">
                    <h1 className='Instr mt-4'>Instructions</h1>
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index}>
                        <div className="mt-6">
                          <label className='steps2 font-bold uppercase'>STEP {index + 1}</label>
                          <p className="instruction-text-align">{instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 lg:col-span-1 lg:order-3">
                  <div className="mb-4">
                    <h1 className="block mb-4 ingre-text-style2">Ingredients</h1>
                    <div className="mt-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <div key={index} className="mt-3 mr-6">
                          <div className="ingre-text">{ingredient}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap test-for-placing">
            <div className="lg:w-1/3 lg:order-1">
              <h1 className="block mb-2 ingre-text-style">Tools</h1>
              {recipe.tools.map((tool, index) => (
                <div className="mt-3">
                  <p className='text-tools' key={index}>{tool}</p>
                </div>
              ))}
            </div>
            <span className="whitespace">white space</span>
          </div>
          </div>
        )}
      </div>
    </div >
  );
}
