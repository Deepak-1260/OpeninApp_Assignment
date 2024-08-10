import React, { useEffect } from 'react';
import './App.css';
import { Link} from 'react-router-dom';
import { Login } from './Authentication.jsx';
import { gapi } from 'gapi-script';
import Navigator from './Navigator.jsx';

const clientId = "764581852279-lfsjbjbu1uv3tphs06hv0bb9ss2q40vd.apps.googleusercontent.com";

const RightComp = () => {
  useEffect(() => {
    const loadGapi = () => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        });
      }
      gapi.load('client:auth2', start);
    };

    loadGapi();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  const onLoginSuccess = (res, navigate) => {
    console.log("login successful current user:", res.profileObj);
    navigate('/home');
  };

  return (
    <Navigator> 
      {(navigate) => (
        <div className="right">
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
          <Login onSuccess={(res) => onLoginSuccess(res, navigate)} />
          <div className="signin">
            <div className="signinform">
              <label>Email address</label>
              <input type="text" placeholder="kellakdk@gmail.com" value="kellakdk@gmail.com" />
              <label>Password</label>
              <input type="password" placeholder="Password" value="1234" />
              <span className="forgot-password">Forgot password?</span>
              <Link to="/home">
              <button className="signin-button">Sign In</button>
              </Link>
            </div>
          </div>
          <p className="register-link">
            Don't have an account? <span>Register here</span>
          </p>
        </div>
      )}
    </Navigator>
  );
};

export default RightComp;
