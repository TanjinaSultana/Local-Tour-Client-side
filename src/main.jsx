import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootPage from './rootPage/RootPage';
import Login from './components/routes/Login';
import Register from './components/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    
    children:[
      

        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
