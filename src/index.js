import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact'
import Policy from './pages/Policy';
import TermsConditions from './pages/TermsConditions';
import ViewRoom from './pages/ViewRoom';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/terms",
    element: <TermsConditions />,
  },
  {
    path: "/viewroom",
    element: <ViewRoom />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

