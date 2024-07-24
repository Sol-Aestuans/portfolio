import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider, Outlet} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// imports for routing
import Root from './routes/Root.jsx';
import ResumePage from './routes/Resume.jsx';
import ProjectsPage from './routes/Projects.jsx';

//component imports
import MyNavBar from './components/MyNavBar.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWrapper />,
      children: [
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
          path:"/resume",
          element: <ResumePage />
        },
        {
          path:"/projects",
          element: <ProjectsPage />
        }
      ]
    }
  ]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

// Wrapper for the app to allow the navbar to remain constant through routing
function AppWrapper(){
  return(
    <div className='AppWrap'>
      <MyNavBar />
      <Outlet />
    </div>
  );
}

export default App;