import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WriteData from "./component/WriteData";
import Read from "./component/Read";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WriteData/>,
    },
    {
      path: "/read",
      element: <Read/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
