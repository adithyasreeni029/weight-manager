import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard";
import Addweight from "../pages/Addweight";
import WeightList from "../pages/WeightList";
import Summary from "../pages/Summary";



const router = createBrowserRouter([
    { path:'/',element:<Login/> },
    { path: "/signup",element:<Signup/> },
    {path:"/dashboard",element:<Dashboard/>},
    {path:"/addweight",element:<Addweight/>},
    {path:"/weightlist",element:<WeightList/>},
    {path:"/summary",element:<Summary/>}
]);
export default router;