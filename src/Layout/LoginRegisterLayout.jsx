import React from "react";
import Navbar from "../pages/Shared/Header/Navbar";
import { Outlet } from "react-router-dom";

const LoginRegisterLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginRegisterLayout;
