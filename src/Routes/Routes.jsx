import { createBrowserRouter } from "react-router-dom";

import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home";
import Menu from "../Components/Pages/Menu/Menu";
import Orders from "../Components/Pages/Orders/Orders";

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
    ],
  },
]);
export default router;
