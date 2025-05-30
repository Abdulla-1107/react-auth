import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/header/Header";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import Contact from "./pages/Contact";
import Statistic from "./pages/Statistic";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/otp", element: <OTP /> },
    { path: "/contact", element: <Contact /> },
    { path: "/statistic", element: <Statistic /> },
  ]);

  return (
    <>
      <Header />
      <main className="container mx-auto mt-5 px-4">{routes}</main>
    </>
  );
};

export default React.memo(App);
