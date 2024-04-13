import React from 'react';
import CustomLink from './CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./pages/admin.css"
import { faComment, faMagnifyingGlass, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function AdminNav() {
     return (
          <div className="Container-Nav-Admin">
               <div className="flex justify-center">
                    <div className="flex flex-col items-center" >
                         <img src='/logo.png' className="logo" alt='hi' style={{ width: '170px', height: '170px', marginRight: '150px' }} />
                         <p className="Title-Nav-Admin">Hello, Admin</p>
                         <div className="flex flex-col items-start">
                              <CustomLink to="/admin/dashboard" className="link">
                                   <div className="flex items-center">
                                        <img src='/tachometer.png' className=" " style={{ width: '30px', height: '22px', marginBottom: '5px', marginLeft: "-2px", marginRight: "8px" }}/>
                                        <p className='mb-2 Content-Nav-Admin'>Dashboard</p>
                                   </div>
                              </CustomLink>
                              <CustomLink to="/admin/Comments" className="link">
                                   <div className="flex items-center">
                                        <FontAwesomeIcon icon={faComment} className='admin-nav-icons' />
                                        <p className='mb-2 Content-Nav-Admin'>Comments</p>
                                   </div>
                              </CustomLink>
                              <CustomLink to="/admin/Adminrecipes" className="link">
                                   <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUtensils} className='admin-nav-icons' />
                                        <p className='mb-2 Content-Nav-Admin'>Recipes</p>
                                   </div>
                              </CustomLink>
                              <CustomLink to="/admin/Users" className="link">
                                   <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUser} className='admin-nav-icons' />
                                        <p className='mb-2 Content-Nav-Admin'>Users</p>
                                   </div>
                              </CustomLink>
                                   <div className="flex items-center">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='admin-nav-icons'/>
                                        <input className='mb-2 Content-Nav-Admin2' placeholder='search' />
                                   </div>

                         </div>
                    </div>
               </div>
          </div>
     );
}
