import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React from 'react';

const clientId = "764581852279-lfsjbjbu1uv3tphs06hv0bb9ss2q40vd.apps.googleusercontent.com";

const Login = ({ onSuccess }) => {
  const onFailure = (res) => {
    console.log("login failed:", res);
  };

  return (
    <div id="signInbutton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Sign in with Google"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
    
  );
};

const Logout = () => {
  const onSuccess = () => {
    console.log("logout successful");
  };

  return (
    <div id="signOutbutton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

// Exporting both components at the end of the file
export { Login, Logout };
