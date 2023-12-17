import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import './index.css';
import App from './App';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Map from './pages/Map';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App/>,
  // },
  {
    path: "/my-app/",
    element: <App/>,
  },
  {
    path: "/my-app/blog",
    element: <Blog/>,
  },
  {
    path: "/my-app/contact",
    element: <Contact/>,
  },
  {
    path: "/my-app/sign-up",
    element: <SignUp/>,
  },
  {
    path: "/map",
    element: <Map/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
