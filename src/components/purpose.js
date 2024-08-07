import shiv from "../images/purpose/shiv.jpg";
import rukkbay from "../images/purpose/rukkbay.jpeg";
import gym from "../images/singleProject/the volvarine gym.jpg";
import sns from "../images/purpose/sns.jpg";
import twh from "../images/purpose/twh.jpg";
import sns2 from "../images/purpose/sns2.jpg";
import { NavLink } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

function Purpose() {
  const divRefs = useRef([]);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
  useEffect(() => {
    return () => {
      fetch("https://sahastrabackend.onrender.com/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site: "purpose",
        }),
      })
        .then(() => {})
        .catch((error) => {});
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "div1") {
              if (counts[0] < 1) {
                const array = counts;
                array[0] = 1;
                setCounts(array);
                typingEffect(entry);
              }
            }
            if (entry.target.id === "div2") {
              if (counts[1] < 1) {
                const array = counts;
                array[1] = 1;
                setCounts(array);
                typingEffect(entry);
                entry.target.children[1].classList.add("animateRight");
              }
            }
            if (entry.target.id === "div3") {
              if (counts[2] < 1) {
                const array = counts;
                array[2] = 1;
                setCounts(array);
                entry.target.children[0].classList.add("animateLeft");
                entry.target.children[1].classList.add("animateRight");
              }
            }
            if (entry.target.id === "div4") {
              if (counts[3] < 1) {
                const array = counts;
                array[3] = 1;
                setCounts(array);
                entry.target.children[0].classList.add("animateLeft");
                entry.target.children[1].classList.add("animateRight");
              }
            }
            if (entry.target.id === "div5") {
              if (counts[4] < 1) {
                const array = counts;
                array[4] = 1;
                setCounts(array);
                typingEffect(entry);
                entry.target.children[1].classList.add("animateRight");
              }
            }
            if (entry.target.id === "div6") {
              if (counts[5] < 1) {
                const array = counts;
                array[5] = 1;
                setCounts(array);
                typingEffect(entry);
              }
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

  const typingEffect = (event) => {
    const updateContent = event;
    const contentHeading =
      updateContent.target?.children[0]?.children[0]?.innerText;
    const contentDescription =
      updateContent.target?.children[0]?.children[1]?.innerText;
    updateContent.target.children[0].children[1].innerText = "";
    updateContent.target.children[0].children[0].innerText = "";
    for (let i = 0; i <= contentHeading.length; i++) {
      setTimeout(() => {
        updateContent.target.children[0].children[0].innerText =
          contentHeading.substring(0, i);
      }, i * 15);
    }
    for (let i = 0; i <= contentDescription.length; i++) {
      setTimeout(() => {
        updateContent.target.children[0].children[1].innerText =
          contentDescription.substring(0, i);
      }, i * 15);
    }
  };

  return (
    <div>
      <p className="mr-3 fw-700 pLR67">Our Purpose</p>
      <div id="div1" ref={(el) => (divRefs.current[0] = el)}>
        <div className="pLR67 ">
          <p></p>
          <p className="mx-20 mt-28 mb-36 fs-36 text-justify fw-700 leading-tight">
            Design has the power to inspire joy, uplift lives, and strengthen
            the spirit of community.
          </p>
        </div>
      </div>
      <div
        id="div2"
        ref={(el) => (divRefs.current[1] = el)}
        className="mt-32 column overflow-hidden justify-between pLR67 flex relative"
      >
        <div className=" w100 mRT3 newsContent ">
          <h3 className="fs-27 leading-10 mb-9 ">
            We're in it for the greater good.
          </h3>
          <p className="fs-17 leading-6 pr-8">
            At Sahastra Architects, we’re all about designing spaces that truly
            make a difference. People are at the heart of every project we
            undertake because creating positive, impactful places is our
            passion.
          </p>
        </div>
        <div className="w48 w100 mRT3 text-right">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/the-wooden-brown-house">
              <img
                src={shiv}
                className="parallelImagesRight"
                alt="shiv wall"
              ></img>
            </NavLink>
          </div>
          <div>
            <p className="fs-13 mt-4 ">The Wooden Brown House </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div
        id="div3"
        ref={(el) => (divRefs.current[2] = el)}
        className="mt-32 column overflow-hidden flex pLR67  justify-between"
      >
        <div className="w48 w100">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/rukkbay-cafe">
              <img
                src={rukkbay}
                alt="rukkbay"
                className="parallelImagesRight"
              ></img>
            </NavLink>
          </div>
          <div>
            <p className="fs-13 mt-4 ">The Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w48 mRT3 w100 ">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/the-volvarine-gym">
              <img
                src={gym}
                alt="gym"
                className="parallelImagesLeft  mr-8"
              ></img>
            </NavLink>
          </div>
          <div className="text-right">
            <p className="fs-13 mt-4 ">Volvarine Gym</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div
        id="div4"
        ref={(el) => (divRefs.current[3] = el)}
        className="mt-32 overflow-hidden column flex pLR67  justify-between"
      >
        <div className="w48 w100">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/sun-n-soil-backpackers-hostel">
              <img
                src={sns}
                alt="sun n soil farm"
                className="parallelImagesRight"
              ></img>
            </NavLink>
          </div>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel </p>
            <p className="fs-13 mt-6 gray">Jolly Grant</p>
          </div>
        </div>
        <div className="w48 mRT3 w100">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/the-white-villa">
              <img
                src={twh}
                alt="the white house"
                className="parallelImagesRight"
              ></img>
            </NavLink>
          </div>
          <div className="text-right">
            <p className="fs-13 mt-4 ">The White Villa</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div
        id="div5"
        ref={(el) => (divRefs.current[4] = el)}
        className="mt-32 overflow-hidden column pLR67 flex justify-between"
      >
        <div className=" mRT3 w100 newsContent  pL0">
          <h3 className="fs-27 leading-10  mb-9">
            We create places with meaning.
          </h3>
          <p className="fs-17 leading-6 pr-8">
            Architecture is more than just buildings; it's about storytelling.
            Every place has its own unique story, and our designs bring these
            stories to life. We create spaces that enrich neighborhoods, build
            strong communities, energize people, and care for our planet.
          </p>
        </div>
        <div className="w48 w100 mRT3 text-right">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/sun-n-soil-backpackers-hostel">
              <img
                src={sns2}
                className="parallelImagesRight"
                alt="sun n soil"
              ></img>
            </NavLink>
          </div>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel </p>
            <p className="fs-13 mt-6 gray">Jolly Grant</p>
          </div>
        </div>
      </div>
      <div
        id="div6"
        ref={(el) => (divRefs.current[5] = el)}
        className=" mt-32 flex justify-center w100"
      >
        <div className="w-1/2">
          <h3 className="fs-27 leading-10  mb-9">We design with purpose.</h3>
          <p className="fs-17 leading-6 pr-6 text-justify">
            At Sahastra Architects, several ideals ignite our passions and keep
            us focused on what matters most. These core values are the building
            blocks of who we are and what we stand for, giving us a sense of
            purpose. We warmly invite you to explore our values and discover our
            legacy.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Purpose;
