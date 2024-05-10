import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Components/Providers/AuthProviders.jsx";
import router from "./Routes/Routes.jsx";
import "./index.css";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
      <QueryClientProvider client={queryClient}>
      <div className="">
          <RouterProvider router={router}></RouterProvider>
        </div>
    </QueryClientProvider>
        
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
