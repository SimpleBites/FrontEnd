import React, { useState, useEffect } from 'react';
import AdminNav from '../adminNav';
import "./admin.css"

export default function Panel() {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="flex">
      <AdminNav />
      <div className="container-whole-page">
        <div className="flex items-center justify-between mb-4">
          <h1 className="Users-panel-css ml-10 mt-10">Users</h1>
          <div className="flex">
            <input className="mr-4 py-2 px-4 mr-10 mt-10 search-user-thingy" type="text" placeholder="Search user" />
          </div>
        </div>
        <div className='table-container'>
        <table className="table">
          <thead>
            <tr>
              <th className='table-content'>id</th>
              <th className='table-content'>image</th>
              <th className='table-content'>username</th>
              <th className='table-content'>email</th>
              <th className='table-content'>password</th>
              <th className='table-content'>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <div className="ml-10 mr-10">1</div></td>
              <td><img src='imgholder.png' style={{height: "40px", marginLeft: "10px"}} /></td>
              <td>henk</td>
              <td>test@test.com</td>
              <td>12341234</td>
              <button className='mr-2 mt-6 edit-btn'>edit</button>
              <button className='delete-btn'>delete</button>
            </tr>
            <tr>
              <td><div className="ml-10 mr-10">2</div></td>
              <td><img src='imgholder.png' style={{height: "40px", marginLeft: "10px"}} /></td>
              <td>henk</td>
              <td>test@test.com</td>
              <td>12341234</td>
              <button className='mr-2 mt-6 edit-btn'>edit</button>
              <button className='delete-btn'>delete</button>
            </tr>
            <tr>
              <td><div className="ml-10 mr-10">3</div></td>
              <td><img src='imgholder.png' style={{height: "40px", marginLeft: "10px"}}/></td>
              <td>henk</td>
              <td>test@test.com</td>
              <td>12341234</td>
              <button className='mr-2 mt-6 edit-btn'>edit</button>
              <button className='delete-btn'>delete</button>
            </tr>
            
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
