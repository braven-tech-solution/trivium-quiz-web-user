import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import AuthProvider from "./Context/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import CartProvider from "./Context/CartContext/index.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
        </AuthProvider>
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
