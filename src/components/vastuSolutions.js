import vastuBanner from "../images/IDS/vastuBanner.jpg";
import benefitsOfVastu from "../images/IDS/vastuBenefits.png";
import principleOfVastu from "../images/IDS/principleOfVastu.jpg";
import principleOfVastu2 from "../images/IDS/principlesOfVastu2.webp";
import principleOfVastu4 from "../images/IDS/principlesOfVastu4.jpeg";
import principleOfVastu3 from "../images/IDS/princpleOfVastu3.png";
import vastuShastra from "../images/IDS/vastuShastra.jpg";
import { useEffect, useRef, useState } from "react";

function VastuSolutions() {
  const divRefs = useRef([]);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target.id === "div1" ||
              entry.target.id === "div2" ||
              entry.target.id === "div3"
            ) {
              // if (counts[0] < 1) {
              //   const array = counts;
              //   array[0] = 1;
              //   setCounts(array);
              // }
              entry.target.children[1].classList.add("slideRight");
              setTimeout(() => {
                entry.target.children[1].classList.remove("imageContainer");
                entry.target.children[1].children[0].classList.add(
                  "aDSOverlayHidden"
                );
                entry.target.children[0].classList.add("slideDown");
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
          src={vastuBanner}
          alt="vastu banner"
          className="w-full h-full "
        ></img>
        <div className="vastuBannerOverlay">Vastu Solutions</div>
      </div>
      <div
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="flex column imageHoverContainer items-start justify-center pLR67 mt-32"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <div>
            <h3 className="fs-27 leading-10 mb-9 ">
              Architectural Vastu Shastra
            </h3>
            <p className="fs-17 leading-6 text-justify">
              At Sahastra Architects, we embrace Architectural Vastu Shastra as
              a timeless Indian science guiding our design ethos. It's more than
              just principles—it's about creating spaces that resonate with
              harmony and balance. From layout to spatial geometry, we believe
              in crafting environments that nurture well-being, inviting health,
              wealth, happiness, and prosperity into every corner. It's our way
              of blending ancient wisdom with modern design for spaces that
              truly feel like home.
            </p>
          </div>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay text-center">
            Architectural Vastu Shastra
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img src={vastuShastra} alt="vastu" className="news1Image"></img>
        </div>
      </div>
      <div
        id="div2"
        ref={(el) => (divRefs.current[1] = el)}
        className="flex column imageHoverContainer items-start justify-center pLR67 mt-32"
      >
        <div className="w-1/2 w100 mr-8 hidden">
          <h3 className="fs-27 leading-10 mb-9  ">
            Key Principles of Vastu Shastra
          </h3>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">Orientation and Direction:</li>
            <li className="fs-17 leading-6 text-justify dot">
              Vastu emphasizes the importance of the cardinal directions (North,
              East, South, and West) and their specific attributes.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              Each direction is associated with different elements (Earth,
              Water, Fire, Air, and Space) and deities, influencing the
              placement of rooms and functions within a building.
            </li>
          </ul>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">
              Five Elements (Panchabhutas):
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              Vastu integrates the balance of the five natural elements: Earth
              (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space
              (Akash).
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              Proper alignment and placement of these elements in architectural
              design ensure harmony and positive energy flow.
            </li>
          </ul>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">Energy Flow:</li>
            <li className="fs-17 leading-6 text-justify dot">
              The concept of energy (Prana) flow is central to Vastu. Ensuring a
              free and balanced flow of energy within a space is believed to
              enhance the well-being of its occupants.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              Architectural features like entrances, windows, and interior
              layouts are designed to optimize energy circulation.
            </li>
          </ul>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">
              Site Selection and Planning:
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              Vastu provides guidelines for selecting a site based on soil
              quality, topography, and environmental conditions.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              The shape and slope of the plot, along with the surrounding
              landscape, are also considered in Vastu planning.
            </li>
          </ul>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">Spatial Geometry:</li>
            <li className="fs-17 leading-6 text-justify dot">
              The design and layout of buildings follow specific geometric
              patterns and symmetry.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              The Vastu Purusha Mandala, a sacred diagram, is often used as a
              blueprint for spatial arrangement, ensuring proportionate and
              balanced structures.
            </li>
          </ul>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">
              Zoning and Functional Layouts:
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              Different areas of a building are designated for specific
              functions based on Vastu principles.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              For example, kitchens are ideally placed in the southeast (Agni
              corner), bedrooms in the southwest, and living rooms in the
              northeast.
            </li>
          </ul>
          <ul className="mt-14">
            <li className="fs-24 leading-8 mb-5">Auspicious Measurements:</li>
            <li className="fs-17 leading-6 text-justify dot">
              Vastu prescribes the use of auspicious measurements for
              construction activities, ensuring structures are built with
              dimensions that foster positive energy.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              The length, width, and height of rooms and buildings are
              calculated to align with Vastu norms.
            </li>
          </ul>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay textUp">
            Key Principles of Vastu Shastra
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>
          <img src={principleOfVastu} alt="vastu" className="news1Image"></img>
          <img
            src={principleOfVastu2}
            alt="vastu"
            className="news1Image mt-14"
          ></img>
          <img
            src={principleOfVastu3}
            alt="vastu"
            className="news1Image mt-14"
          ></img>
          <img
            src={principleOfVastu4}
            alt="vastu"
            className="news1Image mt-14"
          ></img>
        </div>
      </div>
      <div
        id="div3"
        ref={(el) => (divRefs.current[2] = el)}
        className="flex column imageHoverContainer items-start justify-center pLR67 mt-32"
      >
        <div className="w-1/2 w100 hidden mr-8">
          <h3 className="fs-27 leading-10 mb-9  ">
            Benefits of Vastu in Architecture
          </h3>
          <ul className="mt-14">
            <li className="fs-17 leading-6 text-justify dot">
              <span className="font-bold">Enhanced Well-being:</span> By
              aligning living spaces with natural forces, Vastu aims to improve
              the physical and mental well-being of inhabitants.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              <span className="font-bold">Prosperity and Success:</span> Proper
              application of Vastu principles is believed to attract wealth,
              success, and positive opportunities.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              <span className="font-bold">Harmonious Living:</span> A
              Vastu-compliant home or workspace fosters a harmonious
              environment, reducing stress and promoting peaceful coexistence.
            </li>
            <li className="fs-17 leading-6 text-justify dot">
              <span className="font-bold">Health Improvements:</span> Vastu can
              contribute to better health by eliminating negative energies and
              promoting a healthier lifestyle.
            </li>
          </ul>
        </div>
        <div className="w48 w100 mRT3 imageContainer relative">
          <div className="aDSOverlay">
            Benefits of Vastu in Architecture
            {window.innerWidth < 550 ? (
              <span className="fs-12 block mt-3">click to know more</span>
            ) : (
              ""
            )}
          </div>

          <img
            src={benefitsOfVastu}
            alt="vastu"
            className="news1Image object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default VastuSolutions;
