import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/wealthBuddy/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Job from './components/About/job/Job.jsx'
import Signup from './components/Signup/Signup.jsx'
import Faq from './components/FAQ\'S/Faq.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "/job",
    element: <div><Job/></div>,
  },
  {
    path: "/job/signup",
    element: <div><Signup/></div>,
  },
  {
    path: "/job/signup/faq",
    element: <div><Faq/></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);