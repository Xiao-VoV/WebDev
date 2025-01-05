import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Homepage from './routers/Homepage.jsx';
import Write from './routers/Write.jsx';
import LoginPage from './routers/LoginPage.jsx';
import RegisterPage from './routers/Register.jsx';
import SinglePostPage from './routers/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

// fr-FR locale is imported as frFR
import { zhCN } from '@clerk/localizations'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//如果没有publishable key 就抛出错误
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element:<MainLayout/>,
    children:[
      {
        path: "/",
        element:  (
          <Homepage/>
        ),
      },
      {
        path: "/:slug",
        element: <SinglePostPage/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} localization={zhCN}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
