import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CustomLink from './CustomLink';
import './pages/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col justify-center items-center bg-lightblue py-4">
      <div className="Top-Footer">
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-media-icon bg-white rounded-full p-2" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-media-icon bg-white rounded-full p-2" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-media-icon bg-white rounded-full p-2" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-media-icon bg-white rounded-full p-2" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-media-icon bg-white rounded-full p-2" />
          </a>
        </div>

        <div className="test">
          <ul className="mt-4 flex flex-row justify-center items-center">
            <CustomLink to="/Home" className="mx-4">&nbsp;&nbsp;Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CustomLink>
            <CustomLink to="/About" className="mx-4">About &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CustomLink>
            <CustomLink to="/Recipes" className="mx-4">Recipes &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CustomLink>
            <CustomLink to="/Contact" className="mx-4">Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</CustomLink>
          </ul>


        </div>

      </div>

      <div className="Bottom-Footer">
        All Rights Reserved © <span id="currentYear">{currentYear}</span>&nbsp;Simple Bites
      </div>
    </footer>
  );
}
