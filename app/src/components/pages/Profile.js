import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Profile() {
  const [profileData, setProfileData] = useState([])

  const logout = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      window.location.href = "/Login?logout=successful";
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:4000/session', {
          method: 'GET',
          headers: {
              "Content-Type": "application/json"
          },
          credentials: 'include', // Important for CORS and cookies
        });
        const data = await response.json();
        setProfileData(data); // Assuming the API returns a JSON object with isLoggedIn boolean
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);


  return (
    <div className="mx-auto px-12 flex justify-center items-center flex-col">
      <div className="container flex items-center justify-center"> 
        <div className='favourites flex items-center'>
          <span className="icon-container">
            <FontAwesomeIcon icon={faUser} className='User text-white' />
          </span>
          <div className='ml-2'> 
            <h1 className="User-text text-left">Welcome, {profileData.username}</h1>
            <p className="mt-2 mb-2 text-left Lorem extra-styling-for-text"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Consequat mauris nunc congue nisi vitae suscipit tellus.<br></br> Pharetra massa massa ultricies mi quis hendrerit.<br></br> Vel eros donec ac odio tempor orci dapibus ultrices in.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto px-8 ">
        <div className="flex mb-4 justify-start"> 
          <CustomLink to="/profile" className="mr-4">
            <button className='Profile-btn custom-button2'>
              Change profile
            </button>
          </CustomLink>
          
            <form onSubmit={logout}>
            <button className='logout-btn custom-button3'>
              Logout
            </button>
            </form>
         
        </div>
      </div>
      <div className="container justify-center mt-16">
        <CustomLink to="/favorites" className="box">
          <div className="box-content2">
            <FontAwesomeIcon icon={faHeart} className='heart' />
            <span className="text2">Saved Recipes</span>
          </div>
        </CustomLink>
        <CustomLink to="/submit" className="box">
          <div className="box-content2">
            <FontAwesomeIcon icon={faDownload} className='download' />
            <span className="text2">Submit Your Own Unique Recipes</span>
          </div>
        </CustomLink>
      </div>
    </div>
  );
}