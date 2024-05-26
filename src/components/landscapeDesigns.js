import landscapeBanner from "../images/IDS/landscapeBanner.webp";
import landscapePoster1 from "../images/IDS/landscape-design-drawing.jpg";
import keyElements from "../images/IDS/keyElementsOfLandscape.png";
import designPrinciples from "../images/IDS/6-Key-Landscaping-Principles-90.webp";
import environmentConsiderations from "../images/IDS/sustainable-landscape-design.jpeg";
import { useEffect, useRef } from "react";
function LandscapeDesigns() {
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
          src={landscapeBanner}
          alt="vastu banner"
          className="w-full h-full banner"
        ></img>
        <div className="vastuBannerOverlay">Landscape Designs</div>
      </div>
      <div
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="flex justify-center items-start column mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">Landscape Designs</h3>
          <p className="fs-17 leading-6 text-justify">
            Landscape design is the art of planning and creating outdoor spaces
            to achieve aesthetic, functional, and environmental goals. At
            Sahastra Architects, we love transforming outdoor spaces into
            beautiful, functional, and sustainable environments.
          </p>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay text-center">
            Landscape Designs
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img
            src={landscapePoster1}
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
              <span className="font-bold">Plants and Vegetation: </span>
              We carefully choose trees, shrubs, flowers, and lawns that thrive
              in your climate and add visual charm to your space.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Hardscape Elements: </span>
              Think pathways, patios, decks, walls, and fences made from
              materials like stone, brick, and wood to create structure and
              style.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Water Features: </span>
              Ponds, fountains, and waterfalls bring a touch of tranquility and
              movement to your garden.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Lighting: </span>
              We use lighting to ensure safety and to highlight the beautiful
              features of your landscape, making it enchanting at night.
            </li>
            <li className="fs-17 dot leading-6">
              <span className="font-bold">Structures and Furniture: </span>
              From cozy gazebos to stylish outdoor furniture, we create
              comfortable and durable spaces for relaxation and entertaining.
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
          <img src={keyElements} className="news1Image" alt="landscape "></img>
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
              <span className="font-bold">Unity and Harmony: </span>
              We make sure everything works together beautifully.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Balance: </span>
              Achieving a pleasing visual balance, whether through symmetry or a
              more relaxed, asymmetrical approach. Ensuring all elements fit
              well within the space.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Proportion and Scale: </span>
              Ensuring all elements fit well within the space.{" "}
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Rhythm and Line: </span>
              Using patterns and lines to guide the eye and create interest.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Focal Points: </span>
              Highlighting key features like a stunning tree or a beautiful
              sculpture.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Color and Texture: </span>
              Mixing colors and textures for a dynamic, inviting landscape.
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
            src={designPrinciples}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
      <div
        id="div4"
        ref={(el) => (divRefs.current[3] = el)}
        className="flex justify-center items-start column mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">
            Environmental Considerations
          </h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Sustainability: </span>
              Designing with eco-friendly materials, conserving water, and
              minimizing maintenance needs.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Wildlife Habitat: </span>
              Creating spaces that welcome and support local wildlife.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Soil and Water Management: </span>
              Managing water runoff, preventing erosion, and promoting healthy
              soil.
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
          <img
            src={environmentConsiderations}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
    </div>
  );
}
export default LandscapeDesigns;
