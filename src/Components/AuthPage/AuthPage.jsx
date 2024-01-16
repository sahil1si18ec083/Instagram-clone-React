import React, { useEffect, useRef, useState } from "react";

import PlayStore from "../../Images/playstore.png";
import Microsoft from "../../Images/microsoft.png";
import AuthForm from "./AuthForm";
import AuthImage1 from "../../Images/auth1.png";
import AuthImage2 from "../../Images/auth2.png";
import AuthImage3 from "../../Images/auth3.png";
import AuthImage4 from "../../Images/auth4.png";
import { ToastContainer } from "react-toastify";
const AuthPage = () => {
  const imagesArray = [AuthImage1, AuthImage2, AuthImage3, AuthImage4];
  const [visibleImage, setVisibleImage] = useState(0);
  // useEffect(() => {

  //   const timer = setTimeout(() => {

  //     if (visibleImage === imagesArray.length - 1) {
  //       setVisibleImage(0);
  //     } else {
  //       setVisibleImage(visibleImage + 1);
  //     }
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [visibleImage]);
  console.log(visibleImage);
  return (
    <div className="auth-body">
        <ToastContainer />
      <div className="auth-screen">
        <div className="auth-Form-container">
          {imagesArray.map((imageSrc, index) => (
            <img
              style={{
                display: index == visibleImage ? "block" : "none",
                width: "413px",
                height: "604px",
                objectFit: "cover",
              }}
              key={index}
              src={imageSrc}
            />
          ))}

          <div className="login-view">
            <AuthForm />
            <div className="auth-footer">
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: "1rem 0rem",
                }}
              >
                Get the app.
              </div>
              <div className="flex-items">
                <img
                  src={PlayStore}
                  style={{
                    height: "2.5rem",
                  }}
                  alt=""
                />
                <img
                  src={Microsoft}
                  style={{
                    height: "2.5rem",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
