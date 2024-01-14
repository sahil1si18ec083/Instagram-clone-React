import React, { useRef } from "react";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Signup = ({email,password,fullName,userName}) => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <input
        type="text"
        ref={email}
        placeholder="Email"
        className="input-field"
      />
      <input
        type="text"
        ref={userName}
        placeholder="UserName"
        className="input-field"
      />
      <input
        type="text"
        ref={fullName}
        placeholder="FullName"
        className="input-field"
      />
      <input
        type={showPassword ? "text" : "password"}
        ref={password}
        placeholder="Password"
        className="input-field"
      />
      <button
      className="toggle-visiblity"
        onClick={() => {
          setShowPassword((prev) => !prev);
        }}
      >
        {showPassword ? <VisibilityIcon sx={{
          height: "1.2rem"

        }} /> : <VisibilityOffIcon sx={{
          height: "1.2rem"

        }} />}
      </button>
    </div>
  );
};

export default Signup;
