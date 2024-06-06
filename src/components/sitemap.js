import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import underConstructionImage from "../images/sitemap.jpg";

function Sitemap() {
  return (
    <>
      {/* <p className="mr-3 fw-700 pLR67">Sitemap</p>

      <div className=" sitemapContainer">
        <div className="relative">
          <div className="flex justify-center ">
            <div className="flex fs-33 homeSitemap green justify-center text-black">
              Sahastra Architects
            </div>
          </div>
          <div className="arrowDown -mt-4 flex justify-center items-center ">
            <hr className="hr"></hr>
          </div>
          <hr className="flatHr"></hr>
          <div className="flex items-start justify-between">
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>

              <Link className="block linksSitemap" to="/home">
                Home
              </Link>
            </div>
            <div className="relative">
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>
              <Link
                className="text-center block linksSitemap"
                to="integrated-design-solutions"
              >
                Architectural<br></br> design<br></br> solutions
              </Link>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
              </div>
              <div className="absolute ADSAbsoluteContainer">
                <hr className="flatHr wADSHR"></hr>
                <div className="flex items-start justify-between ">
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      />
                    </div>

                    <Link className="block linksSitemap" to="/facade-designs">
                      Facade Designs
                    </Link>
                  </div>
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      />
                    </div>

                    <Link className="block linksSitemap" to="/interior-designs">
                      Interior Designs
                    </Link>
                  </div>
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      />
                    </div>

                    <Link className="block linksSitemap" to="/vastu-solutions">
                      Vastu Solutions
                    </Link>
                  </div>
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      />
                    </div>

                    <Link
                      className="block linksSitemap"
                      to="/landscape-designs"
                    >
                      Landscape Designs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>
              <Link className="block linksSitemap" to="/work">
                Work
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>

              <Link className="block linksSitemap" to="/purpose">
                Purpose
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>

              <Link className="block linksSitemap" to="/gallery">
                Gallery
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>

              <Link className="block linksSitemap" to="/people">
                People
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>

              <Link className="block linksSitemap" to="/studios">
                Studios
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                />
              </div>

              <Link className="block linksSitemap" to="/sitemap">
                Sitemap
              </Link>
            </div>
          </div>
          <ul className="flex items-start justify-between"></ul>
        </div>
      </div> */}
      <img
        src={underConstructionImage}
        className="w-full h-screen"
        alt="under contruction image"
      ></img>
    </>
  );
}
export default Sitemap;
