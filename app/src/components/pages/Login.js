import React from 'react';
import './footer.css'; // Your custom CSS file
import CustomLink from '../CustomLink';

export default function Login() {
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
        </div>
        <div className="input-container">
          <form action="login.php" method="POST" className="custom-form">
            <div className="mb-3 flex flex-col">
              <label htmlFor="usernameOrEmail" className="custom-label">
                Username or Email
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="username"
                // placeholder="Username or Email"
                required
                className="custom-input"
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="password" className="custom-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // placeholder="Password"
                required
                className="custom-input"
              />
            </div>
            <div className="check-box">
              <label className="flex items-left mb-4 check-box"> {/* Update class to check-box */}
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
