import { useEffect } from "react";
import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

import { loadFromLocalStorage } from "./utils/storage";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedAuth = loadFromLocalStorage("auth");

    if (!savedAuth) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
