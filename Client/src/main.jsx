// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import UserHomepage from './Components/UserHomepage/UserHomepage.jsx';
import Match from './Components/Match/Match.jsx';
import Chat from "./Components/Chat/Chat.jsx";
import User from './Components/User/User.jsx';
import Signup from './pages/SignUpPage.jsx'; // Import the Signup component
import Login from './pages/LoginPage.jsx'; // Import the Login component
const router = createBrowserRouter([
  
    {
      path: '/', // Root path now renders the App component
      element: <App />,
      children: [
        {
          index: true, // Default child route renders HomePage
          element: <HomePage />,
        },
        {
          path: 'signup', // Signup page as a child of App
          element: <Signup />,
        },
        {
          path: 'login', // Login page as a child of App
          element: <Login />,
        },

        {
          path: 'about', // About page as a child of App
          element: <About />,
        },

        {
          path: 'user', // User-related paths under App
          children: [
            {
              index: true, // Default user route renders UserHomepage
              element: <UserHomepage />,
            },
            {
              path: 'match',
              element: <Match />,
            },
            {
              path: 'chat',
              element: <Chat />,
            },
            {
              path: 'profile',
              element: <User />,
            },
          ],
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );