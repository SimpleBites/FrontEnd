import React, { useState, useEffect } from 'react';
import { faMagnifyingGlass, faHeart as FasHeart } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Recipe = ({ recipe, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.favorite === 'yes');

  const handleToggleFavorite = () => {
    onToggleFavorite(recipe.category_id);
    setIsFavorite(prevState => !prevState);
  };




  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <button
          onClick={handleToggleFavorite}
          className={isFavorite ? "btn-test-favorite favorited" : "btn-test-favorite"}
          style={{ position: 'relative', left: 454 }}
        >
          <FontAwesomeIcon icon={isFavorite ? FasHeart : FasHeart} />
        </button>
        <CustomLink to={`/recipe/${recipe.id}`}>
          <img
            src="/pancakes.png"
            alt={recipe.title}
            className="object-cover"
            style={{ width: '275px', height: '275px', margin: '5px', marginBottom: '30px' }}
          />
          <h2 className="recipe-title-fontsize">{recipe.title}</h2>
        </CustomLink>
      </div>
    </div>
  );
};

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
        setRecipes(data.data);
        //const filteredRecipe = data.find(recipe => data.id === id);
        
      } catch (error) {
        console.error(error);
      }
      
    }
    fetchData()
  
  }, [])

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleToggleFavorite = recipeId => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.category_id === recipeId) {
        return { ...recipe, favorite: recipe.favorite === 'yes' ? 'no' : 'yes' };
      }
      return recipe;
    });

    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <div className="blue-bar w-full h-22 flex justify-center items-center">
        <div className="search-container flex justify-center items-center w-full">
          <span className="mr-2 search-bar-text">What's on the menu today?</span>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Recipes or ingredients"
            className="py-2 search-field-styling px-2"
          />
          <div className="extra-search-input">
            <div className="blue-input-box">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white Mag-glass-style" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="favorites-container">
          <h1 className="favorite">Recipes</h1>
          <span className="block favorite-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in. Quis commodo odio aenean sed adipiscing diam donec adipiscing.</span>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4" style={{ flexDirection: 'row' }}>
            {filteredRecipes.map((recipe, index) => (
              <Recipe key={index} recipe={recipe} onToggleFavorite={handleToggleFavorite} />
            ))}
          </div>
          <div className="mt-2 block mb-2">
            <h1 className='new-no-text'>hi</h1>
          </div>
        </div>
      </div>
    </div>
  );
}