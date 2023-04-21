import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="logo" />
        <p className="fs-5 text-secondary">Journalism Without Fear or Favour</p>
        <p className="fs-6">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="bg-body-secondary d-flex align-items-center py-2 mt-4">
        <button type="button" className="btn btn-danger rounded-0 ms-2">
          Latest
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
    </div>
  );
};

export default Header;
