import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Login from "./Components/Login";
import Footter from "./Components/Footter";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footter/></>,
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footter/></>,
    },
    {
      path: "/team",
      element: <><Navbar/><Team/><Footter/></>,
    },
    {
      path: "/login",
      element: <><Navbar/><Login/><Footter/></>,
    },
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
