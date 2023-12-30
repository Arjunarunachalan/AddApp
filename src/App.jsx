import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { config } from './components/Form/Form'
import Layout from './components/Layout'
import Dashboard from './pages/Dashbord'
import Advertismentlist from './pages/AdvertismentList'
import  axiosInstance  from './Config/axios'
import "./assets/Table.scss"

config({axios:axiosInstance})
function App() {

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/advertismentlist",
        element: <Advertismentlist />,
      },
    ],
  },
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
