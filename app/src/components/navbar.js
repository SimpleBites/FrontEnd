import React from 'react';
import CustomLink from './CustomLink';
import './pages/footer.css';
import { faArrowUpFromBracket, faHeart, faScrewdriverWrench, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
     return (
          <nav className="nav">
               <div className="background">
                    <div className="nav-content">
                         <CustomLink to="/Home" >
                              <img src='/logo.png' className="logo" alt='hi' style={{ width: '150px', height: '150px', marginRight: '5px' }} />
                         </CustomLink>
                         <div className="slogan"><h2 className="Simple"> Simple Bites</h2>
                              <p className="Flavor">Flavor, Simplified</p>
                         </div>
                    </div>
               </div>


               <nav>
                    <div className='bottom-nav'>

                         <ul>
                              <div className="nav-btm-content">
                                   <CustomLink to="/Home" className="Home">Home</CustomLink>
                                   <CustomLink to="/About">About</CustomLink>
                                   <CustomLink to="/Recipes">Recipes</CustomLink>
                                   <CustomLink to="/Contact">Contact</CustomLink>
                                   {/* <CustomLink to="/Login">

                                        <div className="login-box">
                                             <img src="/login.png" alt="Login" />
                                             <span className="text-white">Login</span>
                                        </div>



                                   </CustomLink> */}
                                   <div className="logged-in-box flex">
                                        <CustomLink to="/settings"> <FontAwesomeIcon icon={faScrewdriverWrench} className='mr-3 ml-1'/></CustomLink>
                                             <CustomLink to="/favorites"> <FontAwesomeIcon icon={faHeart} className='mr-3' /></CustomLink>
                                             <CustomLink to="/submit"> <FontAwesomeIcon icon={faArrowUpFromBracket}className='mr-2' /></CustomLink>
                                             <CustomLink to="/profile"><img src='userpfp.jpg' alt="Logo" className='pfpuser' /></CustomLink>
                                        </div>
                              </div>
                         </ul>
                    </div>

               </nav>
          </nav>
     );
}



