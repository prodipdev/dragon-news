import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="logo" />
        <p className="fs-5 text-secondary">Journalism Without Fear or Favour</p>
        <p className="fs-6">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="bg-body-secondary d-flex align-items-center py-2 mt-5">
        <button type="button" className="btn btn-danger rounded-0 ms-2">
          Danger
        </button>
        <Marquee gradient={false} pauseOnHover={true}>
          <p className="m-0">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News U.S. President Joe Biden has announced
            nearly $3 billion in new U.S. military a...
          </p>
        </Marquee>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/career"} className="nav-link">
                  Career
                </Link>
              </li>
            </ul>
            <p className="me-3">Profile</p>
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
