import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/docker.svg";

// TODO: FIX NAVBAR COLLAPSE ISSUE - WEIRD BORDER AND BACKGROUND TEMPORARY FIX IN PLACE

const Navbar = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   id: 1,
  //   username: "Martibo",
  //   email: "martibo@gmail.com",
  // });

  return (
    <nav id="navbar" className="navbar navbar-expand-md navbar-dark">
      <div className="container-md">
        <Link to="/" className="navbar-brand">
          <Logo className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="navbar-nav">
            <NavLink
              exact
              to="/"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/apps"
              className="nav-item nav-link"
              activeClassName="active"
            >
              Apps
            </NavLink>
          </div>
          <div className="navbar-nav ml-auto user-login">
            {user ? (
              <div className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i> {user.username}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/">
                    Account
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <Link className="nav-item nav-link" to="/">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
