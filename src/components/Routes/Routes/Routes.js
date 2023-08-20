import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Home from "../../Home/Home";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
        
    }
])