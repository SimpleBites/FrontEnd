import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink';

export default function Profile() {
  return (
    <div className="mx-auto px-12 flex justify-center items-center flex-col">
      <div className="container flex items-center justify-center"> {/* Modified container to also center items horizontally */}
        <div className='favourites flex items-center'>
          <span className="icon-container">
            <FontAwesomeIcon icon={faUser} className='User text-white' />
          </span>
          <div className='ml-2'> {/* Added margin to separate the icon and the text */}
            <h1 className="User-text text-left">Welcome, User!</h1>
            <p className="mt-2 mb-2 text-left Lorem extra-styling-for-text"> {/* Moved Lorem text inside the same container */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Consequat mauris nunc congue nisi vitae suscipit tellus.<br></br> Pharetra massa massa ultricies mi quis hendrerit.<br></br> Vel eros donec ac odio tempor orci dapibus ultrices in.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto px-8 ">
        <div className="flex mb-4 justify-start"> {/* Added justify-start class */}
          <CustomLink to="/profile" className="mr-4">
            <button className='Profile-btn custom-button2'>
              Change profile
            </button>
          </CustomLink>
          <CustomLink to="/logout">
            <button className='logout-btn custom-button3'>
              Logout
            </button>
          </CustomLink>
        </div>
      </div>
      <div className="container justify-center mt-16">
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