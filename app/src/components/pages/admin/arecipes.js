import React, { useState, useEffect } from 'react';
import AdminNav from '../../adminNav';
import CustomLink from '../../CustomLink';

export default function Arecipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;

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
        console.log('Fetched data:', data);
        setRecipes(data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const title = recipe.title || ''; 
    return title.toLowerCase().includes(searchQuery);
  });

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handleEdit = (id) => {
    console.log(`Edit recipe with id ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete recipe with id ${id}`);
  };

  return (
    <div className="flex">
      <AdminNav />
      <div className="container-whole-page w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="Users-panel-css ml-5 mt-4">Recipes</h1>
          <div className="flex">
            <input
              className="mr-4 py-2 px-4 mr-10 mt-10 search-user-thingy"
              type="text"
              placeholder="Search recipe" 
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className='table-container'>
          <table className="table">
            <thead>
              <tr>
                <th className='table-content'>id</th>
                <th className='table-content'>image</th>
                <th className='table-content'>recipe name</th> 
                <th className='table-content'>description</th>
                <th className='table-content'>time</th>
                <th className='table-content'>difficulty</th>
                <th className='table-content'>views</th>
                <th className='table-content'>actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecipes.map(recipe => (
                 <tr key={recipe.id}>
                 <td>{recipe.id}</td>
                 <td><img src={recipe.image} style={{ height: "60px", marginLeft: "10px" }} alt={recipe.title} /></td>
                 <td>{recipe.title}</td>
                 <td>{recipe.description}</td>
                 <td>{recipe.cooking_time}</td>
                 <td>{recipe.difficulty}</td>
                 <td>{recipe.views}</td>
                 <td>
                    <div className="flex">
                      <button className='mr-2 mt-6 edit-btn' onClick={() => handleEdit(recipe.id)}>edit</button>
                      <CustomLink to={`/recipe/${recipe.id}`}>
                        <button className='edit-btn2'>view</button>
                      </CustomLink>
                      <button className='delete-btn' onClick={() => handleDelete(recipe.id)}>delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => handleClick(number)}
              className={`next-btn ${currentPage === number ? 'selected' : ''}`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
