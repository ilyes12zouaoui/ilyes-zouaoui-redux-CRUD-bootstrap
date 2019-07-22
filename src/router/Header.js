import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark mb-5">
      <div className="container">
        {" "}
        <NavLink style={{ fontSize: "19px" }} className="navbar-brand" to="/">
          Zouaoui ilyes Redux CRUD
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul> */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" style={{ fontSize: "19px" }} to="/">
                home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "19px" }}
              >
                blogs
              </a>
              <div
                className="dropdown-menu dropdown-menu-right "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink
                  className="dropdown-item"
                  activeClassName=""
                  to="/blogs/create"
                  style={{ fontSize: "18px" }}
                >
                  create synchrone
                </NavLink>

                <NavLink
                  style={{ fontSize: "18px" }}
                  className="dropdown-item"
                  activeClassName=""
                  to="/blogs/create-async"
                >
                  create asynchrone
                </NavLink>
                <NavLink
                  style={{ fontSize: "18px" }}
                  className="dropdown-item"
                  activeClassName=""
                  to="/blogs"
                >
                  show list
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
