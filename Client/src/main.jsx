// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import UserHomepage from './Components/UserHomepage/UserHomepage.jsx';
import Match from './Components/Match/Match.jsx';
import Calendar from './Components/Calendar/Calendar.jsx';
import Chat from "./Components/Chat/Chat.jsx";
import User from './Components/User/User.jsx';
import AboutPage from './pages/AboutPage.jsx';
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
          path: 'about',
          element: <AboutPage/>
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
            {
              path: 'calendar',
              element: <Calendar/>
            }
          ],
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );