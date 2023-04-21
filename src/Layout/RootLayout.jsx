import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Header/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <LeftNav></LeftNav>
          </div>
          <div className="col-md-6">
            <Outlet></Outlet>
          </div>
          <div className="col-md-3">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default RootLayout;
