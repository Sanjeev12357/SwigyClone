import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body";

import About from "./components/About";

import Contact from "./components/Contact";

import RestaurantMenu from "./components/RestuarantMenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

import AppLayout from "./App"; // Import the AppLayout component defined in app.jsx

const appRouter = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    children: [
      {
        path: "/", 
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children:[{
          path:"profile",
          element:<Profile/>
        }],
        
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"cart",
        element:<Cart/>,
      },
      
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
