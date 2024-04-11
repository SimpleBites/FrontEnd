import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="flex flex-col items-center mt-20 h-screen">
      <h1 className="title-contact-page mb-8">Lorem ipsum dolor sit <br></br>amet</h1>
      <form onSubmit={handleSubmit} className="flex">
        <p className="Lorem-text-styling-contact mr-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in.
        </p>
        <div className="mr-4 ml-60 box-submit-contact">
          <p className="mt-3 text-align-contact">Your name</p>
          <input 
            className="text-area-contact" 
            type='text' 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <p className='text-align-contact'>Your email</p>
          <input 
            className="text-area-contact" 
            type='email' 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
          <p className='text-align-contact'>Your message</p>
          <textarea 
            name="message" 
            value={formData.message} 
            className="text-area-contact" 
            style={{ resize: 'none', overflow: 'hidden', height: "108px"}} 
            onChange={handleChange} 
            required
          />
          <button type="submit" className="sub-button2">S U B M I T</button>
        </div>
      </form>
      <div>
        <p className="text-recipe-contact">Check Out These Incredible Recipes!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ml-80 pr-8" style={{ flexDirection: 'row' }}>
        {recipes.map((recipe, index) => (
          <a key={index} href={`/${recipe.category_id}`} className="flex flex-col items-center">
            <img src={recipe.image} alt={recipe.title} className="object-cover" style={{ width: '275px', height: '275px', margin: '5px', marginBottom: '10px' }} />
            <div className="text-center">
              <h2 className="">{recipe.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}