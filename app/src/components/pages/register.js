import React from 'react';
import './footer.css';
import CustomLink from '../CustomLink';

export default function Register() {
     return (
          <div className="flex flex-col justify-center items-center h-screen">
               <h1 className="login mb-4">Test</h1>
               <div className="flex justify-between">
                    <div className="selected">
                         <CustomLink to="/Register">
                              <h2 className="custom-text top-text-reg">R E G I S T E R&nbsp;&nbsp;&nbsp;</h2>
                         </CustomLink>
                    </div>
                    <CustomLink to="/Login">
                         <h2 className="custom-text">L O G I N</h2>
                    </CustomLink>
               </div>
               <div className="custom-container">
                    <div className="flex justify-between">
                    </div>

                    <div className="logo-container">
                         <img
                              src="/logo.png"
                              className="logo2"
                              alt="hi"
                              style={{ width: '150px', height: '150px', marginRight: '1px' }}
                         />
                         <h1 className="blue">R E G I S T E R</h1>
                    </div>
                    <div className="input-container">
                         <form action="login.php" method="POST" className="custom-form">
                              <div className="mb-3 flex flex-col">
                                   <label htmlFor="usernameOrEmail" className="custom-label">
                                        Name
                                   </label>
                                   <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="custom-input"
                                   />
                              </div>
                              <div className="mb-3 flex flex-col">
                                   <label htmlFor="usernameOrEmail" className="custom-label">
                                        Username
                                   </label>
                                   <input
                                        type="text"
                                        id="Username"
                                        name="username"
                                        required
                                        className="custom-input"
                                   />
                              </div>
                              <div className="mb-3 flex flex-col">
                                   <label htmlFor="usernameOrEmail" className="custom-label">
                                        Email
                                   </label>
                                   <input
                                        type="text"
                                        id="Email"
                                        name="email"
                                        required
                                        className="custom-input"
                                   />
                              </div>
                              <div className="mb-3 flex flex-col">
                                   <label htmlFor="password" className="custom-label">
                                        Password
                                   </label>
                                   <div className="flex"> 
                                        <input
                                             type="password"
                                             id="password1"
                                             name="password1"
                                             required
                                             className="custom-input2"
                                        />
                             
                                 
                                        <input
                                             type="password"
                                             id="password2"
                                             name="password2"
                                             required
                                             className="custom-input2"
                                        />
                                      
                                   </div>
                                   <div className="flex flex-col">
                                   <span className='Enter'>enter password</span>
                                   <span className='Confirm'>confirm password</span>
                                   </div>
                              </div>
                              <div className="check-box">
                                   <label className="flex items-left mb-4 check-box">
                                        <input
                                             type="checkbox"
                                             name="remember"
                                             className="custom-checkbox"
                                             required
                                        />
                                        <span className="custom-checkbox-label">&nbsp;I agree to the storage and processing <p className="data">of my data by this website.</p></span>
                                   </label>
                              </div>
                              <button
                                   type="submit"
                                   className="custom-button"
                              >
                                   R E G I S T E R
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
}