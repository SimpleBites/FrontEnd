import React from 'react';
import './footer.css';
import CustomLink from '../CustomLink';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {

     const navigate = useNavigate()
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState("")
     const [password1, setPassword1] = useState('');
     const [password2, setPassword2] = useState("")
     const [usernameError, setUsernameError] = useState('');
     const [emailError, setEmailError] = useState('');
     const [password1Error, setPassword1Error] = useState('');
     const [password2Error, setPassword2Error] = useState('');

     
     const handleSubmit = async (event) => {
          event.preventDefault();
          try {
               const response = await fetch('http://localhost:4000/registersubmit', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ username, email, password1, password2 }),

               });

               const data = await response.json()

               const errors = data.errors

               setUsernameError('');
               setEmailError('');
               setPassword1Error('');
               setPassword2Error('');
               if(errors === undefined){
                    alert("register succesful! redirecting to homepage")
                    window.location.href = "/Home";
                  } else{
                    errors.forEach(error => {
                         if (error.path === 'username') {
                              setUsernameError(error.msg);
                         } else if (error.path === 'email') {
                              setEmailError(error.msg);
                         } else if (error.path === 'password1') {
                              setPassword1Error(error.msg);
                         } else if (error.path === 'password2') {
                              setPassword2Error(error.msg);
                         }
                    });
               }
              
          } catch (error) {
               console.log(error)
          }
     }

     return (
          <div className="flex flex-col justify-center items-center h-screen mb-6">
               <h1 className="login mb-4">Test</h1>
               <div className="flex justify-between">
                    <div className="selected8">
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
                         <h2 id="errmessages"></h2>
                    </div>
                    <div className="input-container">
                         <form onSubmit={handleSubmit} method="POST" className="custom-form">

                              <div className="mb-3 -mt-6 flex flex-col">
                                   <label htmlFor="usernameOrEmail" className="custom-label">
                                        Username
                                   </label>
                                   <input
                                        type="text"
                                        id="Username"
                                        name="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        className="custom-input"
                                   />
                                   {<p className="text-red-500 flex justify-start pl-10 text-md italic">{usernameError}</p>}
                              </div>
                              <div className="mb-3 flex flex-col">
                                   <label htmlFor="usernameOrEmail" className="custom-label">
                                        Email
                                   </label>
                                   <input
                                        type="text"
                                        id="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name="email"
                                        required
                                        className="custom-input"
                                   />{<p className="text-red-500 flex justify-start pl-10 text-md italic">{emailError}</p>}
                              </div>
                              <div className="mb-3 flex flex-col">
                                   <label htmlFor="password" className="custom-label">
                                        Password
                                   </label>
                                   <div className="flex">
                                        <input
                                             type="password"
                                             id="password1"
                                             value={password1}
                                             onChange={(e) => setPassword1(e.target.value)}
                                             name="password1"
                                             required
                                             className="custom-input2"
                                        />



                                        <input
                                             type="password"
                                             id="password2"
                                             value={password2}
                                             onChange={(e) => setPassword2(e.target.value)}
                                             name="password2"
                                             required
                                             className="custom-input2"
                                        />



                                   </div>
                                   {<p className="text-red-500 flex justify-start pl-10 text-xs italic">{password1Error}</p>}
                                   {<p className="text-red-500 text-md italic">{password2Error}</p>}
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
                                   className="custom-button mb-10"
                              >
                                   R E G I S T E R
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
}