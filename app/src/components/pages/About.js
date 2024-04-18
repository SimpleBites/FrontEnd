import React, { useState, useEffect } from 'react';
import CustomLink from '../CustomLink';

export default function About() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data2.json');
        const data = await response.json();
        setRecipes(data.recipes.slice(0, 3));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen">
      <h1 className="title-about-page mb-4" style={{ color: '#365486', fontSize: '40px', marginRight: '790px', textAlign: 'left', marginTop: '10px' }}>Lorem ipsum dolor sit <br />amet</h1>
      <div className="flex justify-center items-center">
        <p className="mr-4" style={{ width: '700px', marginBottom: '40px', marginLeft: '-25px', color: '#365486', fontSize: '15px', textAlign: 'left' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in.      
        </p>
        <img src="/pancakes.jpg" alt="Pancakes" className="object-cover about-image" style={{ width: '400px', height: '300px', marginRight: '30px', marginTop: '-130px', marginBottom: '40px' }} />
      </div>
      <div className="flex justify-center items-center mt-4">
        <CustomLink to="/contact" className="contact-button" style={{ backgroundColor: '#365486', marginRight: '1050px', padding: '10px 20px', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Contact Us</CustomLink>
      </div>
      <div>
        <p className="text-recipe-about" style={{ fontSize: '19px', color: '#365486', marginBottom: '22px', marginTop: '30px' }}>Check Out These Incredible Recipes!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-80 pr-8" style={{ flexDirection: 'row' }}>
        {recipes.map((recipe, index) => (
          <CustomLink key={index} to={`/${recipe.category_id}`} className="flex flex-col items-center">
            <img src={recipe.image} alt={recipe.title} className="object-cover" style={{ width: '275px', height: '275px', margin: '5px', marginBottom: '10px' }} />
            <div className="text-center">
              <h2 className="">{recipe.title}</h2>
            </div>
          </CustomLink>
        ))}
      </div>
      <span className="white-space"> white space </span>
    </div>
  );
}
