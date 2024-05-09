import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./Components/Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className="">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
