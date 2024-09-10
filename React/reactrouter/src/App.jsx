import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Login from "./Components/Login";
import Footter from "./Components/Footter";
import NotFound from "./Components/NotFound";
import User from "./Components/User";
import ProfilePage from "./Components/ProfilePage";
import Profiles from "./Components/Profiles";
import Hey from "./Components/Hey";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footter/></>,
      errorElement: <NotFound/>
    },
    {
      path: "/about",
      element: <><Navbar/><About/><Footter/></>,
    },
    {
      path: "/hey",
      element: <><Navbar/><Hey/><Footter/></>,
    },
    {
      path: "/team",
      element: <><Navbar/><Team/><Footter/></>,
    },
    {
      path: "/login",
      element: <><Navbar/><Login/><Footter/></>,
    },
    {
      path: "/user/:userId",
      element: <><Navbar/><User/><Footter/></>,
    },
    {
      path: "/profiles",
      element: <><Navbar/><Profiles/><Footter/></>,
      children: [
        {
          path: "/profiles/:profileId",
          element: <><ProfilePage/></>,
        },
      ]
    },
    
  ]);
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
