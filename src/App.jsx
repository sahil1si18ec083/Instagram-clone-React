import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterProvider } from "react-router-dom";

import HomePage from "./Components/HomePage.jsx";
import AuthPage from "./Components/AuthPage/AuthPage.jsx";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "/feed",
      element: <HomePage />,
    },
    // {
    //   path: "/home",
    //   element: <Home />,
    // },
    // {
    //   path: "/profile",
    //   element: <ProfileLayout />,
    // },
    // {
    //   path: "/connections",
    //   element: <ConnectionLayout />,
    // },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
}

export default App;
