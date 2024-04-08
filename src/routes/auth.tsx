import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import New from "../pages/New";
import Preview from "../pages/Preview";
import Profile from "../pages/Profile";
import Page404 from "../pages/404";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export function protectedRouter(){

  let router

  const logged = localStorage.getItem('token')

  if (logged){
    router = createBrowserRouter([
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
    ])
  }else{
    router = createBrowserRouter([
      {
        path:'/',
        element: <SignIn/>
      },{
        path: "/register",
        element: <SignUp/>
      }
    ])
  }
  return router
}