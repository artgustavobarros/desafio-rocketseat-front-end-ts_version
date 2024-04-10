// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import Preview from "../pages/Preview";
// import New from "../pages/New";
// import Profile from "../pages/Profile";
// import Page404 from "../pages/404";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
import { RouterProvider } from "react-router-dom";
import { protectedRouter } from "./auth";
import { useAuth } from "../hooks/context/context";

const Routes = () =>{

  const {data} = useAuth()

  const router = protectedRouter({logged: data.token})

  return(
    <RouterProvider router={router}/>
  )
}

export default Routes