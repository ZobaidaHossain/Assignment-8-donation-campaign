import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import Error from './Pages/Error/Error';
import Phone from './components/Phone/Phone';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
 <MainLayout></MainLayout>

    </div>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/catagory.json')
      },
      {
        path:"/Donation",
        element:<Donation></Donation>

      },
      {
        path:"/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/donate/:id",
        element:<Phone></Phone>,
        loader:()=>fetch('/catagory.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
