import React, { useContext } from "react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const { user } = useContext(AuthContext);
  return (
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
              <NavLink
                to={"/category/0"}
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary nav-underline" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/career"}
                className={({ isActive }) =>
                  isActive ? "nav-link text-primary" : "nav-link"
                }
              >
                Career
              </NavLink>
            </li>
          </ul>

          {user ? (
            <>
              <p className="me-3 m-auto">
                <FaUserCircle style={{ fontSize: "2rem" }} />
              </p>
              <Link
                to={""}
                className="text-danger bg-danger-subtle rounded-circle p-1"
              >
                <FaSignOutAlt style={{ fontSize: "1.5rem" }} />
              </Link>
            </>
          ) : pathname !== "/login" ? (
            <Link to={"/login"} className="btn btn-dark">
              Login
            </Link>
          ) : (
            <Link to={"/register"} className="btn btn-dark">
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
