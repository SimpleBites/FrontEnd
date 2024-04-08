import React from 'react';
import './page.css';

const Home = () => {
  
  const recipes = [
    { name: "Recipe 1", prepTime: "15min", cookTime: "5min" },
    { name: "Recipe 2", prepTime: "20min", cookTime: "10min" },
    { name: "Recipe 3", prepTime: "10min", cookTime: "8min" },
    { name: "Recipe 4", prepTime: "30min", cookTime: "15min" },
    { name: "Recipe 5", prepTime: "25min", cookTime: "12min" },
    { name: "Recipe 6", prepTime: "12min", cookTime: "7min" }
   
  ];

 
  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];

  return (
    <div className="min-h-screen">
      <main className="page">
        <header className="hero" style={{ backgroundImage: 'url("/pancakes.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(127, 199, 217, 0.5)' }}>
          <div className="hero-container container mx-auto px-4 py-12">
            <div className="hero-text text-center">
              <h1 className="text-4xl font-bold text-white">Simple Bites</h1>
              <h4 className="text-lg text-white">Flavour, Simplified</h4>
            </div>
          </div>
        </header>
        <section className="recipes-container container mx-auto px-4 py-8 flex">
          <div className="w-1/4">
            <div className="tags-container">
              <h4 className="text-xl font-bold mb-4 text-black">Recipes</h4>
              <div className="tags-list">
                {/* Map over tags and render each one */}
                {tags.map((tag, index) => (
                  <a key={index} href="/tag-template" className="block text-blue-500 hover:underline mb-2">{tag}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="recipes-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {/* Map over recipes and render each one */}
              {recipes.map((recipe, index) => (
                <a key={index} className="recipe" href={`/recipe/${index}`}>
                  <div className="relative">
                    {/* wijzigen met ditmar recipes bloks */}
                    <i className="fas fa-heart absolute top-2 right-2 text-red-500"></i>
                    <img
                      src="/pancakes.png"
                      className="img recipe-img" 
                      alt={recipe.name}
                    />
                  </div>
                  <h5 className="text-xl font-bold">{recipe.name}</h5>
                  <p className="text-gray-600">Prep: {recipe.prepTime} | Cook: {recipe.cookTime}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;