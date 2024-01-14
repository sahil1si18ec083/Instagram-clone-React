import React from "react";
import Logo from "../../Images/logo.png";
import GoogleAuth from "./GoogleAuth";
import { useRef, useState } from "react";
import Login from "./Login";
import LoadingButton from "@mui/lab/LoadingButton";
import Signup from "./Signup";
import fnSignInWithEmailAndPassword from "../Firebase/fnSignInWithEmailAndPassword";
import fnCreateUserWithEmailAndPassword from "../Firebase/fnCreateUserWithEmailAndPassword";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const userName = useRef(null);
  const [isLoading,setIsLoading]= useState(false);
  return (
    <div>
      <div className="login-right-portion">
        <div className="login-container">
          <div className="login-box">
            <img src={Logo} alt="" className="insta-logo" />
            {isLogin ? (
              <Login
                email={email}
                password={password}
                fullName={fullName}
                userName={userName}
              />
            ) : (
              <Signup email={email} password={password} />
            )}

            <LoadingButton
              loading={isLoading}
              className="login-button"
              onClick={
                isLogin
                  ? () => fnSignInWithEmailAndPassword(email, password,setIsLoading)
                  : () =>
                      fnCreateUserWithEmailAndPassword(
                        userName,
                        email,
                        password,setIsLoading
                      )
              }
            >
              {!isLoading && "Log in"}
            </LoadingButton>

            <div className="horizontal-line">
              <div className="left-line"></div>
              <p className="text">OR</p>
              <div className="right-line"></div>
            </div>
            <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
          </div>
        </div>
        <div className="login-footer">
          <div className="flex-content">
            <div
              style={{
                fontSize: "14px",
                marginRight: "2px",
                color: "white",
              }}
            >
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </div>
            <div className="login-message">
              <div
                style={{
                  color: "#3182ce",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsLogin((prev) => !prev);
                }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
