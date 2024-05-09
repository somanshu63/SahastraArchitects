import react, { useRef, useState, Component, useEffect } from "react";
import DoonOffice2 from "../images/home/DoonOffice2.jpg";
import haridwarOffice from "../images/home/DoonOffice3.jpg";
import MapWithMarkers from "./map";

function Studios() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="pLR67 mRT3">
      <MapWithMarkers />

      <p className="fs-36 fw-700 px-20  leading-tight mt-32">
        With studio cultures unique to their place and people, we’re the
        smallest “big firm” out there.
      </p>

      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27  ">Our Studios</p>
      </div>
      <ul className="flex items-start">
        <li className="w-250O mr-8">
          <img
            src={DoonOffice2}
            alt="projects"
            className="w-250I mb-6 h-48"
          ></img>
          <p className="text-base font-bold mb-3  leading-7">Dehradun</p>
        </li>
        <li className="w-250O ">
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
export default Studios;
