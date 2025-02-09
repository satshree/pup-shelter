import { useEffect } from "react";
import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";

import Header from "./components/Header";

import Lost from "./pages/Lost";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

import { isLoggedIn } from "./utils/api/auth";
import Footer from "./components/Footer";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
  {
    path: "*",
    element: <Lost />,
  },
]);
