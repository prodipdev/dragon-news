import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9">
            <Outlet></Outlet>
          </div>
          <div className="col-md-3">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
