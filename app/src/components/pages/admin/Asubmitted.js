import React, { useState, useEffect } from 'react';
import AdminNav from '../../adminNav';
import CustomLink from '../../CustomLink';

export default function Asubmitted() {
  const [recipes, setRecipes] = useState([]);
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

  const filteredRecipes = recipes.filter(recipe => {
    const title = recipe.title || ''; 
    return title.toLowerCase();
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

  var views = 56;

  const handleView = (recipeId) => {
    console.log('Viewing recipe with ID:', recipeId);
  };

  return (
    <div className="flex">
      <AdminNav/>
      <div className="container-whole-page w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="Users-panel-css ml-5 mt-4">Submitted Recipes</h1>
          <div className="flex"></div>
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
                <th className='table-content'>status</th>
                <th className='table-content'>Action</th>
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
                  <td>{views}</td>
                  <td>
                    <div className="flex justify-center">
                      <div className='status-btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className='reject-content'>submitted</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <CustomLink to={`/admin/aapprove/${recipe.id}`}>
                        <button className='edit-btn2' onClick={() => handleView(recipe.id)}>View</button>
                      </CustomLink>
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
