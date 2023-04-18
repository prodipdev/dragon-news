import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const RightNav = () => {
  return (
    <div>
      <div className="">
        <h5>Login With</h5>
        <button className="btn btn-outline-info w-100">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline-secondary mt-2 w-100">
          <FaGithub /> Login with GitHub
        </button>
      </div>
      <div className="mt-5">
        <h5>Find Us On</h5>
        <div
          className="btn-group-vertical w-100"
          role="group"
          aria-label="Small button group"
        >
          <button
            type="button"
            className="btn btn-outline-secondary text-start"
          >
            <FaFacebook className="text-primary" /> Left
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary text-start"
          >
            <FaTwitter className="text-info" /> Middle
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary text-start"
          >
            <FaInstagram className="text-danger" /> Right
          </button>
        </div>
      </div>
      <div className="bg-body-secondary mt-5 py-3 px-2 rounded">
        <h5>Q-Zone</h5>
        <div>
          <img className="w-100" src={qzone1} alt="" />
          <img className="w-100" src={qzone2} alt="" />
          <img className="w-100" src={qzone3} alt="" />
        </div>
      </div>
      <div className="mt-5 py-5 px-4 bg-dark text-white text-center">
        <h5>Create an Amazing Newspaper</h5>
        <p className="text-secondary">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-danger rounded-0">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
