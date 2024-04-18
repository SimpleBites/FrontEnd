import React from 'react';
import './footer.css'; // Your custom CSS file
import CustomLink from '../CustomLink';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/loginsubmit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({email, password}),

      })

      const data = await response.json()
      const errors = data.errors
      setEmailError('');
      setPasswordError('');
      if(errors === undefined){
        alert("login succesful! redirecting to homepage")
        window.location.href = "/Home";
       
      } else{
        if(errors) {
          errors.forEach(error => {
            if(error.path === 'email') {
              setEmailError(error.msg);
            } else if(error.path === 'password') {
              setPasswordError(error.msg);
            } 
          });
        }
      }
      
    }catch(error){
       console.log(error)
    }
}
 
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="login mb-4">Test</h1>
      <div className="flex justify-between">
        <CustomLink to="/Register">
          <h2 className="custom-text">R E G I S T E R&nbsp;&nbsp;&nbsp;</h2>
        </CustomLink>
        <div className="selected2">
          <CustomLink to="/Login">
            <h2 className="custom-text">L O G I N</h2>
          </CustomLink>
        </div>
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
          <h1 className="blue">L O G I N</h1>
          <h2 id="errmessages"></h2>
        </div>
        <div className="input-container">
          <form onSubmit={handleSubmit} method="POST" className="custom-form">
            <div className="mb-3 flex flex-col">
              <label htmlFor="usernameOrEmail" className="custom-label">
                Username or Email
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                required
                className="custom-input"
              /> {<p className="text-red-500 flex justify-start pl-10 text-md italic">{emailError}</p>}
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="password" className="custom-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // placeholder="Password"
                required
                className="custom-input"
              />{<p className="text-red-500 flex justify-start pl-10 text-md italic">{passwordError}</p>}
            </div>
            <div className="check-box">
              <label className="flex items-left mb-4 check-box"> 
                <input
                  type="checkbox"
                  name="remember"
                  className="custom-checkbox"
                />
                <span className="custom-checkbox-label">&nbsp;Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              className="custom-button"
            >
              L O G I N
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}