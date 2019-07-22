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
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          {/* <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul> */}
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink className="nav-link" style={{ fontSize: "19px" }} to="/">
                home
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
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
                class="dropdown-menu dropdown-menu-right "
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
