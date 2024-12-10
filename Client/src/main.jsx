import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUP from './Pages/SignUP.jsx';


let router =createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
   
    
  },
  {
    path:'/signup',
    element:<SignUP></SignUP>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />

  </StrictMode>,
)
