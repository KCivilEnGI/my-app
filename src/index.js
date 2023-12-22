import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import './index.css';
import App from './App';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import Blog2 from './pages/Blog2';

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
    path: "/my-app/about",
    element: <About/>,
  },
  {
    path: "/my-app/blog",
    element: <Blog/>,
  },
  {
    path: "/my-app/blog2",
    element: <Blog2/>,
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
    path: "/my-app/map",
    element: <Map/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
