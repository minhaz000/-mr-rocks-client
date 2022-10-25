import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import MainContent from './Components/Home/MainContent';
import Main from './layout/Main'
function App(props) {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main> </Main>,
      children:[
        {
          path: "/",
          element: <MainContent></MainContent>
        }
      ]
    },
  ]);
  return (
    <div>


        <RouterProvider router={router} /> 
    </div> 
  );
}

export default App;