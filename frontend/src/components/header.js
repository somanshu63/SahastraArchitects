import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  const home = history.location.pathname === "/";
  console.log(home);
  return (
    <div>
      <div
        className={`flex center space-between fs-36  ${
          home ? "absolute" : "header"
        }`}
      >
        <div className="fw-700">
          <a href="/" className={`no-underline ${!home ? "" : "white"}`}>
            Sahastra Architects
          </a>
        </div>

        <div className="center flex">
          <IoSearch
            style={{
              color: !home ? "" : "white",
              marginRight: "48px",
              fontSize: "35px",
            }}
          />
          <IoMdMenu
            className="pointer"
            onClick={() => {
              props.setSidebar(true);
            }}
            style={{ color: !home ? "" : "white", fontSize: "50px" }}
          />
        </div>
      </div>
      {props.sidebar ? (
        <div className="sidebar">
          <div>
            <IoClose
              onClick={() => {
                props.setSidebar(false);
              }}
              className="close pointer"
              style={{ fontSize: "40px" }}
            />
          </div>
          <nav>
            <ul>
              <li className="navigationList">
                <NavLink
                  to="/work"
                  onClick={() => {
                    props.setSidebar(false);
                  }}
                  className="navLink"
                  activeClassName="active"
                >
                  work
                </NavLink>
              </li>
              <li className="navigationList">
                <NavLink
                  to="/purpose"
                  onClick={() => {
                    props.setSidebar(false);
                  }}
                  className="navLink"
                  activeClassName="active"
                >
                  purpose
                </NavLink>
              </li>
              <li className="navigationList">
                <NavLink
                  to="/people"
                  onClick={() => {
                    props.setSidebar(false);
                  }}
                  className="navLink"
                  activeClassName="active"
                >
                  people
                </NavLink>
              </li>
              <li className="navigationList">
                <NavLink
                  to="/studios"
                  onClick={() => {
                    props.setSidebar(false);
                  }}
                  className="navLink"
                  activeClassName="active"
                >
                  studios
                </NavLink>
              </li>
              <li className="navigationList">
                <NavLink
                  to="/news"
                  onClick={() => {
                    props.setSidebar(false);
                  }}
                  className="navLink"
                  activeClassName="active"
                >
                  news
                </NavLink>
              </li>
              <li className="navigationList">
                <NavLink
                  to="/career"
                  onClick={() => {
                    props.setSidebar(false);
                  }}
                  className="navLink"
                  activeClassName="active"
                >
                  career
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Header;
