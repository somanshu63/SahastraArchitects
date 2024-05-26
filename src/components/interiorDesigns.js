import { useEffect, useRef } from "react";
import interiorBanner from "../images/IDS/interiorBanner.jpg";
import interiorPoster1 from "../images/IDS/interiorPoster1.jpg";
import keyElements from "../images/IDS/elements-of-interior-design.jpg";
import principles from "../images/IDS/Principles-of-interior-design.jpeg";
import eCID from "../images/IDS/eCID.webp";

function InteriorDesigns() {
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
          src={interiorBanner}
          alt="vastu banner"
          className="w-full h-full banner"
        ></img>
        <div className="vastuBannerOverlay">Interior Designs</div>
      </div>
      <div
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="flex justify-center items-start column mt-32 pLR67 imageHoverContainer"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9">Interior Designs</h3>
          <p className="fs-17 leading-6 text-justify">
            Interior design is the art and science of enhancing the interior of
            a building to create a healthier and more aesthetically pleasing
            environment for the people using the space. It involves a
            multifaceted approach that includes planning, research,
            coordination, and management. Whether it’s a cozy home, a productive
            office, or a stylish public space, our goal is to create
            environments that you’ll love to be in—comfortable, beautiful, and
            uniquely yours.
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
            src={interiorPoster1}
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
              <span className="font-bold">Space Planning: </span>
              We carefully choose trees, shrubs, flowers, and lawns that thrive
              in your climate and add visual charm to your space.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Color Scheme: </span>
              We choose colors that set the right mood and make everything look
              cohesive.{" "}
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Lighting: </span>
              We maximize natural light and use creative lighting to make your
              space shine, day and night.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Furniture and Furnishings: </span>
              We pick stylish and comfy furniture that fits perfectly with your
              space.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Materials and Textures: </span>
              We mix different materials and textures to add depth and interest.
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
              <span className="font-bold">Balance: </span>
              We create a balanced look, whether it’s through symmetry or a more
              dynamic arrangement.{" "}
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Rhythm: </span>
              We use repeating elements like colors and textures to guide the
              eye and create a sense of flow.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Emphasis: </span>
              We highlight key features to draw attention and create focal
              points.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Proportion and Scale: </span>
              We ensure everything is in harmony and fits well within the space.{" "}
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Harmony and Unity: </span>
              We make sure all elements work together seamlessly for a unified
              look. sculpture.
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
          <img src={principles} className="news1Image" alt="landscape "></img>
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
              We use eco-friendly materials and energy-efficient solutions to
              care for our planet.
            </li>
            <li className="fs-17 dot leading-6 ">
              <span className="font-bold">Indoor Air Quality: </span>
              We ensure good ventilation and choose materials that keep the air
              fresh and healthy.{" "}
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
          <img src={eCID} className="news1Image" alt="landscape "></img>
        </div>
      </div>
    </div>
  );
}
export default InteriorDesigns;
