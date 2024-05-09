import { createBrowserRouter } from "react-router-dom";

import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Orders from "../Components/Pages/Orders/Orders";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secrect from "../Components/Pages/Shared/Secrect/Secrect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "/orders/:category",
        element: <Orders></Orders>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secrect",
        element: (
          <PrivateRoutes>
            <Secrect></Secrect>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
