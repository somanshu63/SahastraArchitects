import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../images/home/favicon.jpeg";

function Header(props) {
  const history = useHistory();
  const home = history.location.pathname === "/";
  return (
    <div
      className={`relative header justify-between flex items-center fixedBar`}
    >
      <div className="brand flex items-center">
        <a href="/" className={`no-underline flex items-center`}>
          <img src={logo} className="logo" alt="logo"></img>
          <span>Sahastra Architects</span>
        </a>
      </div>

      {window.innerWidth < 550 ? (
        <div className="">
          <IoMdMenu
            className="pointer menu"
            onClick={() => {
              props.setSidebar(true);
            }}
            style={{ fontSize: "2.1875rem" }}
          />
        </div>
      ) : (
        <ul className="navList flex items-center">
          <li className="navigationList">
            <NavLink
              to="/"
              exact
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink  ml-3"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/work"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink  ml-3"
              activeClassName="active"
            >
              Work
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/purpose"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink  ml-3"
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
              className="navLink  ml-3"
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
              className="navLink  ml-3"
              activeClassName="active"
            >
              studios
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/career"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink  ml-3"
              activeClassName="active"
            >
              career
            </NavLink>
          </li>
        </ul>
      )}
      {props.sidebar ? (
        <div className="sidebar">
          <div className="close">
            <IoClose
              onClick={() => {
                props.setSidebar(false);
              }}
              className=" pointer"
              style={{ fontSize: "2.5rem" }}
            />
          </div>

          <ul className="navList flex items-center">
            <li className="navigationList">
              <NavLink
                to="/"
                exact
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink  ml-3"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/work"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink  ml-3"
                activeClassName="active"
              >
                Work
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/purpose"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink  ml-3"
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
                className="navLink  ml-3"
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
                className="navLink  ml-3"
                activeClassName="active"
              >
                studios
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/career"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink  ml-3"
                activeClassName="active"
              >
                career
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Header;
