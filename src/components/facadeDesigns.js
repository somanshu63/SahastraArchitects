import { useEffect, useRef } from "react";
import facadeBanner from "../images/IDS/facadeBanner.jpeg";
import facadePoster1 from "../images/IDS/facadePoster1.jpeg";
import facadeElements from "../images/IDS/keyElementsFacade.jpg";
import facadePrinciples from "../images/IDS/facadePrinciples.jpg";
import facadeEDID from "../images/IDS/fCID.png";

function FacadeDesigns() {
  const divRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target.id === "div1" ||
              entry.target.id === "div2" ||
              entry.target.id === "div3" ||
              entry.target.id === "div4"
            ) {
              // if (counts[0] < 1) {
              //   const array = counts;
              //   array[0] = 1;
              //   setCounts(array);
              // }
              if (window.innerWidth > 550) {
                entry.target.children[1].classList.add("slideRight");
              } else {
                entry.target.children[1].classList.add("slideDown550");
                entry.target.classList.remove("imageHoverContainer");
              }
              setTimeout(() => {
                entry.target.children[1].classList.remove("imageContainer");
                entry.target.children[1].children[0].classList.add(
                  "aDSOverlayHidden"
                );
                if (window.innerWidth > 550) {
                  entry.target.children[0].classList.add("slideDown");
                } else {
                  entry.target.children[0].classList.add("textSlideRight");
                }
                entry.target.children[0].classList.remove("hidden");
                entry.target.classList.add("justifyContentBetween");
              }, 1000);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    divRefs.current.forEach((div) => {
      if (div) {
        observer.observe(div);
      }
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) {
          observer.unobserve(div);
        }
      });
    };
  }, []);
  return (
    <div className="-mt-3">
      <div className="vastuBannerContainer relative">
        <img
          src={facadeBanner}
          alt="facade Banner"
          className="w-full h-full "
        ></img>
        <div className="vastuBannerOverlay">Facade Designs</div>
      </div>
      <div
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="flex justify-center items-start column mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">Facade Designs</h3>
          <p className="fs-17 leading-6 text-justify">
            Facade design focuses on the exterior look and functionality of a
            building, defining its character and impact. Facade design is
            essential for all types of buildings, influencing their first
            impression and overall performance. At Sahastra Architects, we
            create facades that blend beauty, practicality, and sustainability,
            ensuring your building stands out and fits seamlessly into its
            environment.
          </p>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay text-center">
            Facade Designs
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img
            src={facadePoster1}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
      <div
        id="div2"
        ref={(el) => (divRefs.current[1] = el)}
        className="flex justify-center items-start column mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">Key Elements</h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Materials: </span>
              Choices include brick, stone, concrete, glass, metal, and wood,
              each offering unique aesthetics and durability.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Color and Texture: </span>
              Color schemes and textures add depth and visual interest.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Architectural Features: </span>
              Windows, doors, balconies, and ornamentation shape the facade's
              appearance and functionality.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Lighting: </span>
              Natural and artificial lighting enhance the facade’s look and
              usability.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Form and Structure: </span>
              Geometry, symmetry, and asymmetry define the building’s style.
            </li>
          </ul>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay text-center">
            Key Elements
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img
            src={facadeElements}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
      <div
        id="div3"
        ref={(el) => (divRefs.current[2] = el)}
        className="flex justify-center items-start column mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">Design Principles</h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Aesthetic Appeal: </span>
              Creating a visually attractive and distinctive facade.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Functionality: </span>
              Ensuring practical aspects like energy efficiency and ventilation.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Contextual Integration: </span>
              Harmonizing with surrounding buildings and the environment.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Innovation: </span>
              Using new materials and technologies for unique designs.{" "}
            </li>
          </ul>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay text-center">
            Design Principles
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img
            src={facadePrinciples}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
      <div
        id="div4"
        ref={(el) => (divRefs.current[3] = el)}
        className="flex column justify-center items-start mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">
            Environmental Considerations
          </h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Sustainability: </span>
              Incorporating green elements and energy-efficient materials.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Weather Resistance: </span>
              Choosing materials that withstand local climate conditions.
            </li>
          </ul>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay text-center">
            Environmental Considerations
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img src={facadeEDID} className="news1Image" alt="landscape "></img>
        </div>
      </div>
    </div>
  );
}
export default FacadeDesigns;
