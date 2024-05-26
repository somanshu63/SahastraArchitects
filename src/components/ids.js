import { useEffect } from "react";
import Hut from "./hut";
import aDSBanner from "../images/IDS/ADSBanner.jpg";
import aDS from "../images/IDS/ADS.jpg";
import aDS2 from "../images/IDS/ADS2.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Ids() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="-mt-3 bg-white">
      <div className="vastuBannerContainer relative ">
        <img
          src={aDSBanner}
          alt="ads banner"
          className="object-cover w-full h-full"
        ></img>
        <div className="vastuBannerOverlay">Architectural design solutions</div>
      </div>
      <div className="mT-14">
        <Hut />
      </div>
      <div className="pLR67 justify-between items-start flex column">
        <div className="w-1/2 w100">
          <h3 className="fs-27 leading-10 mb-9">
            Architectural design solutions
          </h3>

          <p className="fs-17 leading-6 mb-6 text-justify">
            At Sahastra Architects, we specialize in creating architectural
            design solutions that blend functionality, aesthetics, and
            regulatory compliance seamlessly. From the initial concept
            development and site analysis, we ensure our designs fit perfectly
            within their surroundings. Our focus on efficient layouts,
            structural stability, and sustainable practices—like using
            energy-efficient systems and eco-friendly materials—sets us apart.
            Detailed blueprints and careful cost estimation keep the project on
            track and within budget. We work closely with our clients,
            incorporating their feedback through visualizations and models, to
            create buildings that are not only practical but also beautiful and
            inspiring.
          </p>
          <p className="fs-17 leading-6 mb-4 font-bold">
            Architectural design solutions includes:-
          </p>
          <ul>
            <NavLink to="/facade-designs">
              <li className="dot fs-17 mb-2 pointer">Facade Designs</li>
            </NavLink>
            <NavLink to="/interior-designs">
              <li className="dot fs-17 mb-2 pointer">Interior Designs</li>
            </NavLink>
            <NavLink to="/vastu-solutions">
              <li className="dot fs-17 mb-2 pointer">Vastu Solutions</li>
            </NavLink>
            <NavLink to="/landscape-designs">
              <li className="dot fs-17 mb-2 pointer">Landscape Designs</li>
            </NavLink>
          </ul>
        </div>
        <div className="w48 w100">
          <img src={aDS} alt="ADS" className="mb-12"></img>
          <img src={aDS2} alt="ADS2"></img>
        </div>
      </div>
    </div>
  );
}
export default Ids;
