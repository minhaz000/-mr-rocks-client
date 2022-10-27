import React from 'react';
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import Course from './Components/Course/Course';
import CourseMain from './Components/Course/CourseMain';
import Details from './Components/Course/Details';
import MainContent from './Components/Home/MainContent';
import Login from './Components/Login';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import Main from './layout/Main';
import Err404 from './404';
import Register from './Components/Register';

function App(props) {
const url = "https://server-assignment-10.vercel.app"
  const router =  createBrowserRouter([
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
                  path: "/register",
                  element: <Register> </Register>
                },
                {
                  path: "/course",
                  element: <CourseMain> </CourseMain>,
                  children: [
                              {
                                path:"",
                                element: <Course></Course>,
                                loader : async () =>fetch(`${url}/courses`)
                              },
                              {
                                path: ":courseId",
                                element: <Details> </Details>,
                                loader : async ({ params }) =>fetch(`${url}/course/${params.courseId}`)
                              }
                  ]
                },
                {
                  path : "/*",
                  element: <Err404></Err404>
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