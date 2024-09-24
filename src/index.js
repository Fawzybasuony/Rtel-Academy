import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/contact/Contact";
import Packages from "./pages/Packages/Packages";
import Abute from "./pages/Abute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/Abute",
    element: <Abute />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Packages",
    element: <Packages />,
  },
]);
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 
 
 <RouterProvider router={router} />
  
    <App />

  </React.StrictMode>
);

 
