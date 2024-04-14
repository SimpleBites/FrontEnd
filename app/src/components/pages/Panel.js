import React, { useState, useEffect } from 'react';
import AdminNav from '../adminNav';
import "./admin.css";

export default function Panel() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const usersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data4.json');
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        setUsers(data.users || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleEdit = (id) => {
    console.log(`Edit user with id ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete user with id ${id}`);
  };

  return (
    <div className="flex">
      <AdminNav />
      <div className="container-whole-page w-full">
        <div className="flex items-center justify-between mb-4">
          <h1 className="Users-panel-css ml-5 mt-4">Users</h1>
          <div className="flex">
            <input
              className="mr-4 py-2 px-4 mr-10 mt-10 search-user-thingy"
              type="text"
              placeholder="Search user"
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
                <th className='table-content'>username</th>
                <th className='table-content'>email</th>
                <th className='table-content'>created at</th>
                <th className='table-content'>actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><img src={user.img} style={{ height: "60px", marginLeft: "10px" }} alt={user.name} /></td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button className='mr-2 mt-6 edit-btn' onClick={() => handleEdit(user.id)}>edit</button>
                    <button className='delete-btn' onClick={() => handleDelete(user.id)}>delete</button>
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
