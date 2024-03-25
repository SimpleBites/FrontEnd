import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink';

export default function Profile() {
     return (
          <div className="flex justify-center items-center flex-col">
               <div className="container flex items-center">
                    <div className='favourites flex items-center'>
                         <span className="icon-container">
                              <FontAwesomeIcon icon={faUser} className='User text-white ' />
                         </span>
                    </div>
                    <h1 className="User-text">Welcome, User!</h1>
               </div>
               <p className="mt-4 mb-8 text-center Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat mauris nunc congue nisi vitae suscipit tellus. Pharetra massa massa ultricies mi quis hendrerit. Vel eros donec ac odio tempor orci dapibus ultrices in.</p>
               <div className="flex mb-8">
                    <CustomLink to="/profile" className="mr-4">
                         <button className='Profile-btn custom-button2'>
                              Change profile
                         </button>
                    </CustomLink>
                    <CustomLink to="/logout">
                         <button className='logout-btn custom-button3'>
                              logout
                         </button>
                    </CustomLink>
               </div>
               <div className="container">
                    <CustomLink to="/favorites" className="box">
                         <div className="box-content2">
                              <FontAwesomeIcon icon={faHeart} className='heart' />
                              <span className="text">Saved Recipes</span>
                         </div>
                    </CustomLink>
                    <CustomLink to="/submit" className="box">
                         <div className="box-content2">
                              <FontAwesomeIcon icon={faDownload} className='download' />
                              <span className="text">Submit Your Own Unique Recipes</span>
                         </div>
                    </CustomLink>
               </div>


          </div>
     );
}