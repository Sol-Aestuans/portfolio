import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Root from './routes/Root.jsx';
import AboutMePage from './routes/AboutMe.jsx';
import ProjectsPage from './routes/Projects.jsx';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  // home page
  {
    path:"/",
    element: <Root/>,
  },
  // navigates to home page if unknown path
  {
    path:"*",
    element: <Navigate to="/" />
  },
  {
    path:"/aboutMe",
    element: <AboutMePage />
  },
  {
    path:"projects",
    element: <ProjectsPage />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
