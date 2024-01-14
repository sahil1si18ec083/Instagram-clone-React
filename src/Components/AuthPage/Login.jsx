import React, { useState } from "react";
import { useRef } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Login = ({email,password}) => {

  const [showPassword, setShowPassword] = useState(false);
  console.log(email);
  console.log(password);
  return (
    <div>
      <input
        type="text"
        ref={email}
        placeholder="Email"
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
        {showPassword ? (
          <VisibilityIcon
            sx={{
              height: "1.2rem",
            }}
          />
        ) : (
          <VisibilityOffIcon
            sx={{
              height: "1.2rem",
            }}
          />
        )}
      </button>
    </div>
  );
};

export default Login;

