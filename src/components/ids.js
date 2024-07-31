import { useEffect } from "react";
import Hut from "./hut";
import aDSBanner from "../images/IDS/ADSBanner.jpg";
import aDS from "../images/IDS/ADS.jpg";
import aDS2 from "../images/IDS/ADS2.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Ids() {
  useEffect(() => {
    return () => {
      fetch("https://sahastrabackend.onrender.com/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site: "ADS",
        }),
      })
        .then(() => {})
        .catch((error) => {});
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="-mt-3 bg-white -mb-32 pb-32">
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

          <ul>
            <li className="fs-17 mb-4 dot leading-6 text-justify">
              At Sahastra Architects, we specialize in creating architectural
              design solutions that blend functionality, aesthetics, and
              regulatory compliance seamlessly.
            </li>
            <li className="fs-17 mb-4 dot leading-6 text-justify">
              From the initial concept development and site analysis, we ensure
              our designs fit perfectly within their surroundings.
            </li>
            <li className="fs-17 mb-4 dot leading-6 text-justify">
              Our focus on efficient layouts, structural stability, and
              sustainable practices—like using energy-efficient systems and
              eco-friendly materials—sets us apart.
            </li>
            <li className="fs-17 mb-4 dot leading-6 text-justify">
              Detailed blueprints and careful cost estimation keep the project
              on track and within budget.
            </li>
            <li className="fs-17 mb-4 dot leading-6 text-justify">
              We work closely with our clients, incorporating their feedback
              through visualizations and models, to create buildings that are
              not only practical but also beautiful and inspiring.
            </li>
          </ul>
        </div>
        <div className="w48 w100 mRT3">
          <img src={aDS} alt="ADS" className="mb-12"></img>
          <img src={aDS2} alt="ADS2"></img>
        </div>
      </div>
    </div>
  );
}
export default Ids;
