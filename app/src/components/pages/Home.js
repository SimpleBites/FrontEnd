import React, { useState, useEffect } from 'react';
import './page.css';
import FavoriteButton from '../FavoriteButton';
import CustomLink from '../CustomLink';

const Home = () => {
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
        
        
      } catch (error) {
        console.error(error);
      }
      
    }
    fetchData()
  
  }, [])

  return (
    <div className="min-h-screen">
      <main className="page">
        <header className="hero" style={{ backgroundImage: 'url("/pancakes.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(127, 199, 217, 0.5)' }}>
          <div className="hero-container container mx-auto px-4 py-12">
            <div className="hero-text text-center">
              <h1 className="text-5xl font-bold" style={{ color: "#7FC7D9", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "black", fontSize: "3em" }}>Simple Bites</h1>
              <h4 className="text-3xl text-white text-left">Flavour, Simplified</h4>
            </div>
          </div>
        </header>
        <section className="container mx-auto px-4 py-8">
          <div className="recipes-container flex flex-wrap">
            <div className="w-1/4">
              <div className="tags-container">
                <h4 className="text-xl font-bold mb-4 text-black">Recipes</h4>
                <div className="tags-list">
                  
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <div className="recipes-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {recipes.map((recipe, index) => (
                  <div>
                  <FavoriteButton isFavorite={recipe.favorite} onToggle={() => console.log("Toggle favorite")} />
                  <CustomLink key={recipe.id} className="recipe" to={`/recipe/${recipe.id}`}>
                    <div className="relative">
                      <i className="fas fa-heart absolute top-2 right-2 text-red-500"></i>
                      <img
                        src="/pancakes.png"
                        className="img recipe-img"
                        alt={recipe.title}
                      />
                    </div>
                    <h5 className="text-xl font-bold">{recipe.title}</h5>
                    <p className="text-gray-600">Prep: {recipe.preparation_time} | Cook: {recipe.cooking_time}</p>
                  </CustomLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
