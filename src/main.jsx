import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Homepage from './routers/Homepage.jsx';
import PostListPage from './routers/PostListPage.jsx';
import Write from './routers/Write.jsx';
import LoginPage from './routers/LoginPage.jsx';
import Register from './routers/Register.jsx';
import RegisterPage from './routers/Register.jsx';
import SinglePostPage from './routers/SinglePostPage.jsx';

const router = createBrowserRouter([
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
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
