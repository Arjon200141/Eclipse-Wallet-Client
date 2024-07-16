import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Send from "../Users/Send/Send";
import Home from "../Users/Home/Home";
import Layout from "../Layout/Layout";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:"userhome",
          element:<Home></Home>
        },
        {
          path:"send",
          element: <Send></Send>
        },
        {
          path:"register",
          element:<Layout></Layout>
        }
      ]
    },
  ]);

export default router;