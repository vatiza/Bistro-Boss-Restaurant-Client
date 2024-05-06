import { createBrowserRouter } from "react-router-dom";

import Main from "../Components/Layouts/Main";
import Home from "../Components/Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
