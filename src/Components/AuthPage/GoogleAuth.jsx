import React from "react";
import GoogleLogo from "../../Images/google.png";

import fnSignUpFirstTimeWithGoogle from "../../Components/Firebase/fnSignUpWithGoogle"
const GoogleAuth = ({ prefix }) => {
  

  return (
    <div className="google-auth" onClick={(event)=>fnSignUpFirstTimeWithGoogle(event)}>
      <img className="google-logo-img" src={GoogleLogo} alt="Googlelogo" />

      <div className="blue-text">{prefix} with Google</div>
    </div>
  );
};

export default GoogleAuth;
