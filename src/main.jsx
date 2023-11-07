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
import PrivateRoute from './router/PrivateRoute';
import Service from './components/routes/ServicePage/Service';
import SingleService from './components/routes/ServicePage/SingleService';
import MySchedule from './components/dashboardMenus/myschedule/MySchedule';
import ErrorPage from './components/routes/ErrorPage';
import ProviderService from './components/routes/providerServices/ProviderService';
import ProviderServiceDetails from './components/routes/providerServices/ProviderServiceDetails';
import UpdateService from './components/routes/manageService/updateService';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    errorElement:<ErrorPage></ErrorPage>,
   
    children:[
      
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://service-server-side-three.vercel.app/service')
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
          path: "/service",
          element: <Service></Service>,
          loader: () => fetch('https://service-server-side-three.vercel.app/service')
        },
        {
          path: "/providerService",
          element: <ProviderService></ProviderService>,
          loader: () => fetch('https://service-server-side-three.vercel.app/service')
        },
        {
          path: "/addService",
          element: <PrivateRoute>

            <AddProduct></AddProduct>
          </PrivateRoute>,
        },
      
        {
          path: "/manageServices",
          element: <PrivateRoute>

            <ManageService></ManageService>
          </PrivateRoute>
          ,
          loader: () => fetch('https://service-server-side-three.vercel.app/service')
        },
        
        {
          path: "/:_id",
          element: <PrivateRoute>
         <SingleService></SingleService>
          </PrivateRoute>,
          loader: () => fetch('https://service-server-side-three.vercel.app/service')
        },
        {
          path: "/:_id",
          element: <PrivateRoute>
         <ProviderServiceDetails></ProviderServiceDetails>
          </PrivateRoute>,
          loader: () => fetch('https://service-server-side-three.vercel.app/service')
        },
        {
          path: "/schedule",
          element: <PrivateRoute>
         <MySchedule></MySchedule>
          </PrivateRoute>,
           loader: () => fetch('https://service-server-side-three.vercel.app/service')
         
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
