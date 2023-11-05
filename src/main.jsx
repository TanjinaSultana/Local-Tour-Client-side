import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootPage from './rootPage/RootPage';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import Home from './components/routes/HomePage/Home';
import AuthProvider from './firebase/AuthProvider';
import AddProduct from './components/dashboardMenus/AddProduct';
import ManageService from './components/routes/manageService/ManageService';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
   
    children:[
      
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },

        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>
        },
        {
          path: "/manageServices",
          element: <ManageService></ManageService>,
          loader: () => fetch('http://localhost:5000/product'),
        },
        
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
