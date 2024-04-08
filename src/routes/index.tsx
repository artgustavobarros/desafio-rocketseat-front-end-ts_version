// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import Preview from "../pages/Preview";
// import New from "../pages/New";
// import Profile from "../pages/Profile";
// import Page404 from "../pages/404";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
import { protectedRouter } from "./auth";

const logged = localStorage.getItem('token')

const router = protectedRouter({logged})

export default router