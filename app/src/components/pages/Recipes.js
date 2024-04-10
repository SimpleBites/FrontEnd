import React, { useState, useEffect } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data2.json');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
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
              <a key={index} href={`/${recipe.category_id}`} className="flex flex-col items-center">
                <img src={recipe.image} alt={recipe.title} className="object-cover" style={{ width: '275px', height: '275px', margin: '5px', marginBottom: '10px' }} />
                <div className="text-center">
                  <h2 className="">{recipe.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
