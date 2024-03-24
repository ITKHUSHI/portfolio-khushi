import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/home'
import Projects from './components/projects'
import Skills from './components/skills';
import Certificates from './components/certificates';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const router=createBrowserRouter([
  {
    path:"/portfolio-khushi/",
    element:<App/>,
    children:[
      {
        path:"/portfolio-khushi/",
        element:<Home/>,
      },
      {
        path:"/portfolio-khushi/projects",
        element:<Projects/>,
      },
      {
        path:"/portfolio-khushi/skills",
        element:<Skills/>,
      },
      {
        path:"/portfolio-khushi/certificates",
        element:<Certificates/>,
      },
    ],
  },
  
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
