import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home";
import Dashboard from "../layout/dashboard/Dashboard";
import DashboardHome from "../Pages/DashboardPage/DashboardHome";
import Projects from "../Pages/DashboardPage/Projects";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },    
        ],
      },
      {
        path: "/dashboard",
        element: (      
            <Dashboard />
        ),
        children: [
          {
            path: "dashboard-home",
            element: <DashboardHome/>,
          },
          {
            path: "projects",
            element: <Projects/>,
          },
         
          
        ],
      },
      
])

export default routes;