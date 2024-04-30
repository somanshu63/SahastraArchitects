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
  return (
    <div className="relative">
      <div
        className={`flex center space-between fs-33  ${
          home ? "absoluteSidebar" : "header"
        }`}
      >
        <div className="brand">
          <a href="/" className={`no-underline `}>
            Sahastra Architects
          </a>
        </div>

        <div className="center flex">
          <IoSearch
            style={{
              marginRight: `${window.innerWidth < 768 ? "15px" : "30px"}`,
              fontSize: `${window.innerWidth < 768 ? "20px" : "27px"}`,
            }}
          />
          <IoMdMenu
            className="pointer"
            onClick={() => {
              props.setSidebar(true);
            }}
            style={{ fontSize: `${window.innerWidth < 768 ? "27px" : "35px"}` }}
          />
        </div>
      </div>
      {props.sidebar ? (
        <div className="sidebar">
          <div className="close">
            <IoClose
              onClick={() => {
                props.setSidebar(false);
              }}
              className=" pointer"
              style={{ fontSize: "40px" }}
            />
          </div>
          <nav>
            <ul className="navList">
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
              {/* <li className="navigationList">
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
              </li> */}
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
