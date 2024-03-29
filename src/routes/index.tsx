import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Preview from "../pages/Preview";
import New from "../pages/New";
import Profile from "../pages/Profile";
import Page404 from "../pages/404";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/new',
    element: <New/>
  },
  {
    path:'/preview',//add params id after
    element: <Preview/>
  },
  {
    path:'/profile',
    element: <Profile/>
  },
  {
    path:'*',
    element: <Page404/>
  }
  //add signin and signup after backend only

])

export default router