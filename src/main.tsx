// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import { AppDataContextProvider } from "./context";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AppDataContextProvider>
    <RouterProvider router={router} />
  </AppDataContextProvider>
);
