import React from 'react'
import DispData from './components/DispData'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './components/Add';
import Update from './components/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DispData/>,
    },
    {
      path: "/create",
      element: <Add/>,
    },
    {
      path: "/update/:id",
      element: <Update/>,
    },
  ]);
 
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App