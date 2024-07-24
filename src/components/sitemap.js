import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import underConstructionImage from "../images/sitemap.webp";

function Sitemap() {
  return (
    <>
      <p className="mr-3 fw-700 pLR67">Sitemap</p>

      <div className=" sitemapContainer">
        <div className="relative">
          <div className="flex justify-center ">
            <div className="flex  homeSitemap green justify-center text-black">
              Sahastra Architects
            </div>
          </div>
          <div className="arrowDown mt8 flex justify-center items-center ">
            <hr className="hr"></hr>
          </div>
          <hr className="flatHr"></hr>
          <div className="flex items-start justify-between">
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/">
                <div className="smallGradient">1.0</div>
                Home
              </Link>
            </div>
            <div className="relative">
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>
              <Link
                className="text-center block linksSitemap"
                to="integrated-design-solutions"
              >
                <div className="smallGradient">2.0</div>
                Architectural<br></br> Design<br></br> Solutions
              </Link>
              <div className="arrowDown ADSArrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
              </div>
              <div className="absolute ADSAbsoluteContainer">
                <hr className="flatHr wADSHR"></hr>
                <div className="flex items-start justify-between ">
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      {/* <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      /> */}
                    </div>

                    <Link className="block linksSitemap" to="/facade-designs">
                      <div className="smallGradient">2.1</div>
                      Facade <br></br> Designs
                    </Link>
                  </div>
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      {/* <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      /> */}
                    </div>

                    <Link className="block linksSitemap" to="/interior-designs">
                      <div className="smallGradient">2.2</div>
                      Interior<br></br> Designs
                    </Link>
                  </div>
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      {/* <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      /> */}
                    </div>

                    <Link className="block linksSitemap" to="/vastu-solutions">
                      <div className="smallGradient">2.3</div>
                      Vastu<br></br> Solutions
                    </Link>
                  </div>
                  <div className="linkContainer">
                    <div className="arrowDown aDH flex justify-center items-center ">
                      <hr className="hr"></hr>
                      {/* <MdKeyboardArrowRight
                        style={{ fontSize: "24px", marginLeft: "-12px" }}
                      /> */}
                    </div>

                    <Link
                      className="block linksSitemap"
                      to="/landscape-designs"
                    >
                      <div className="smallGradient">2.4</div>
                      Landscape<br></br> Designs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>
              <Link className="block linksSitemap" to="/work">
                <div className="smallGradient">3.0</div>
                Work
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/purpose">
                <div className="smallGradient">4.0</div>
                Purpose
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/gallery">
                <div className="smallGradient">5.0</div>
                Gallery
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/people">
                <div className="smallGradient">6.0</div>
                People
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/studios">
                <div className="smallGradient">7.0</div>
                Studios
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/faqs">
                <div className="smallGradient">8.0</div>
                Insight
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/contact-us">
                <div className="smallGradient">9.0</div>
                Contact Us
              </Link>
            </div>
            <div>
              <div className="arrowDown flex justify-center items-center ">
                <hr className="hr"></hr>
                {/* <MdKeyboardArrowRight
                  style={{ fontSize: "24px", marginLeft: "-12px" }}
                /> */}
              </div>

              <Link className="block linksSitemap" to="/sitemap">
                <div className="smallGradient">10.0</div>
                Sitemap
              </Link>
            </div>
          </div>
          <ul className="flex items-start justify-between"></ul>
        </div>
      </div>
      {/* <img
        src={underConstructionImage}
        className="w-full"
        alt="under contruction image"
      ></img> */}
    </>
  );
}
export default Sitemap;
