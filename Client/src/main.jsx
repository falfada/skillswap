import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import UserHomepage from './Components/UserHomepage/UserHomepage.jsx';
import Match from './Components/Match/Match.jsx';
import Chat from "./Components/Chat/Chat.jsx";
import User from './Components/User/User.jsx';
import Signup from './pages/SignUpPage.jsx'; // Import the Signup component
import Login from './pages/LoginPage.jsx'; // Import the Login component
const router = createBrowserRouter([
  {
    path: '/', // Default path should render HomePage
    element: <HomePage />,
  },
  {
    path: '/signup', // Add route for Signup
    element: <Signup />,
  },
  {
    path: '/login', // Add route for Login
    element: <Login />,
  },
  {
    path: '/user', // User-related paths
    element: <App />,
    children: [
      {
        index: true,
        element: <UserHomepage />,
      },
      {
        path: "match",
        element: <Match />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "profile",
        element: <User />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);