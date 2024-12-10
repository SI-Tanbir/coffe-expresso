import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUP from './Pages/SignUP.jsx';
import Signin from './Pages/Signin.jsx';


let router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
   
    
  },
  {
    path:'/signup',
    element:<SignUP></SignUP>
  },
  {
    path:'/login',
    element:<Signin></Signin>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />

  </StrictMode>,
)
