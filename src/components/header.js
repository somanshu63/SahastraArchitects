import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../images/home/favicon.jpeg";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

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
          <span className="uppercase">Sahastra Architects</span>
        </a>
      </div>
      {window.innerWidth < 550 ? (
        <div className="">
          <IoMdMenu
            className="pointer menu"
            onClick={() => {
              props.setSidebar(true);
            }}
            style={{ fontSize: "1.5rem", color: "white" }}
          />
        </div>
      ) : (
        <ul className={`navList flex items-center `}>
          <li className="navigationList">
            <NavLink
              to="/"
              exact
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="navigationList iDS relative">
            <NavLink
              to="/integrated-design-solutions"
              className="navLink uppercase pointer ml-3 flex items-center"
              activeClassName="active"
              onClick={() => {
                props.setSidebar(false);
              }}
            >
              ADS
              <span className="ml-1">
                <IoIosArrowDown style={{ fontSize: "1rem" }} />
              </span>
            </NavLink>
            <div className="iDSList">
              <ul>
                <li className="blackContainer"></li>
                <li>
                  <NavLink
                    to="/facade-designs"
                    className="uppercase iDSLinks"
                    activeClassName="iDSActive"
                  >
                    Facade Designs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/interior-designs"
                    className="uppercase iDSLinks"
                    activeClassName="iDSActive"
                  >
                    Interior Designs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/vastu-solutions"
                    className="uppercase iDSLinks"
                    activeClassName="iDSActive"
                  >
                    Vastu Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/landscape-designs"
                    className="uppercase iDSLinks"
                    activeClassName="iDSActive"
                  >
                    Landscape Designs
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigationList">
            <NavLink
              to="/work"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              Work
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/gallery"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              gallery
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/purpose"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
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
              className="navLink uppercase ml-3"
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
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              studios
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/insight"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              Insight
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/contact-us"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="navigationList">
            <NavLink
              to="/sitemap"
              onClick={() => {
                props.setSidebar(false);
              }}
              className="navLink uppercase ml-3"
              activeClassName="active"
            >
              sitemap
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
          <ul className={`navList flex items-center `}>
            <li className="navigationList">
              <NavLink
                to="/"
                exact
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink uppercase ml-3"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="navigationList iDS relative">
              <NavLink
                to="/integrated-design-solutions"
                className="navLink uppercase pointer ml-3 flex items-center"
                activeClassName="active"
                onClick={() => {
                  props.setSidebar(false);
                }}
              >
                Architectural design solutions
                {/* <span className="ml-1 ">
                  <MdKeyboardArrowRight style={{ fontSize: "1.2rem" }} />
                </span> */}
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/facade-designs"
                className="navLink uppercase pointer"
                activeClassName="active"
                onClick={() => {
                  props.setSidebar(false);
                }}
              >
                Facade Designs
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/interior-designs"
                className="navLink uppercase pointer"
                activeClassName="active"
                onClick={() => {
                  props.setSidebar(false);
                }}
              >
                Interior Designs
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/vastu-solutions"
                className="navLink uppercase pointer"
                activeClassName="active"
                onClick={() => {
                  props.setSidebar(false);
                }}
              >
                Vastu Solutions
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/landscape-designs"
                className="navLink uppercase pointer"
                activeClassName="active"
                onClick={() => {
                  props.setSidebar(false);
                }}
              >
                Landscape Designs
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/gallery"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink uppercase ml-3"
                activeClassName="active"
              >
                gallery
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/work"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink uppercase ml-3"
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
                className="navLink uppercase ml-3"
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
                className="navLink uppercase ml-3"
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
                className="navLink uppercase ml-3"
                activeClassName="active"
              >
                studios
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/insight"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink uppercase ml-3"
                activeClassName="active"
              >
                Insight
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/contact-us"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink uppercase ml-3"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="navigationList">
              <NavLink
                to="/sitemap"
                onClick={() => {
                  props.setSidebar(false);
                }}
                className="navLink uppercase ml-3"
                activeClassName="active"
              >
                sitemap
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
