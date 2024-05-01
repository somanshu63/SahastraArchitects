import react, { useRef, useState, Component } from "react";
import DoonOffice2 from "../images/home/DoonOffice2.jpg";
import haridwarOffice from "../images/home/DoonOffice3.jpg";
import MapWithMarkers from "./map";

class Studios extends Component {
  render() {
    return (
      <div className="pLR67 mRT3">
        <MapWithMarkers />

        {window.innerWidth < 550 ? (
          <p className="fs-36 fw-700 px-20 leading-tight mt-32">
            With studio cultures unique to their place and people, we’re the
            smallest “big firm” out there.
          </p>
        ) : (
          <p className="fs-36 fw-700 px-20 leading-tight mt-32">
            With studio cultures unique to <br></br> their place and people,
            we’re <br></br> the smallest “big firm” out <br></br>
            there.
          </p>
        )}
        <div className="flex items-center mt-32 mb-16">
          <div className="line"></div>
          <p className="ml-7 fs-27  ">Our Studios</p>
        </div>
        <ul className="flex items-start">
          <li className="w-250O mb-12 mr-8">
            <img
              src={DoonOffice2}
              alt="projects"
              className="w-250I mb-6 h-48"
            ></img>
            <p className="text-base font-bold mb-3  leading-7">Dehradun</p>
          </li>
          <li className="w-250O mb-12 ">
            <img
              src={haridwarOffice}
              alt="projects"
              className="w-250I mb-6 h-48"
            ></img>
            <p className="text-base font-bold mb-3  leading-7">Haridwar</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default Studios;
