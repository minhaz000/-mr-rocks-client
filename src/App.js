import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";
import Course from './Components/Course/Course';
import CourseMain from './Components/Course/CourseMain';
import Details from './Components/Course/Details';
import MainContent from './Components/Home/MainContent';
import Login from './Components/Login';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import Main from './layout/Main';

function App(props) {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
                {
                  path: "/",
                  element: <MainContent></MainContent>
                },
                {
                  path: "/blog",
                  element: <Blog></Blog>
                },
                {
                  path: "/faq",
                  element: <FAQ></FAQ>
                },
                {
                  path: "/login",
                  element: <Login></Login>
                },
                {
                  path: "/course",
                  element: <CourseMain> </CourseMain>,
                  children: [
                              {
                                path:"",
                                element: <Course></Course>
                              },
                              {
                                path: ":courseId",
                                element: <Details> </Details>
                              }
                  ]
                },
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