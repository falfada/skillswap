import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHomepage from "./Components/UserHomepage/UserHomepage.jsx";
import Match from "./Components/Match/Match.jsx";
import Chat from "./Components/Chat/Chat.jsx";
import User from "./Components/User/User.jsx";
// import Calendar from "./Components/Calendar/Calendar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UserHomepage />,
      },
      {
        path: "/Match",
        element: <Match />,
      },
      {
        path: "/Chat",
        element: <Chat />,
      },
      // {
      //   path: "/Calendar",
      //   element: <Calendar />,
      // },
      {
        path: "/User",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
