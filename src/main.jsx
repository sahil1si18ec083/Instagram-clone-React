import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utility/theme.js";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import AuthPage from "./Components/AuthPage/AuthPage.jsx";
import { RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
