import react, { useState, useRef, useEffect } from "react";
import earthImage from "../images/home/earthImage.jpeg";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import HeaderHome from "./headerHome";
import DoonOffice1 from "../images/home/DoonOffice2.jpg";
import DoonOffice2 from "../images/home/DoonOffice1.jpg";
import tree from "../images/home/tree.jpeg";
import monk from "../images/home/monk.jpeg";
import spotlight1 from "../images/home/spotlight1.jpeg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import spotlight2 from "../images/home/spotlight1.jpg";
import { collectionArray } from "../data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import IDSImage from "./IDSImage";
const doonOfficePictures = [DoonOffice1, DoonOffice2];
const spotlightPictures = [spotlight1, spotlight2];

function Home(props) {
  const [collection, setCollection] = useState(collectionArray);
  const [width, setWidth] = useState(window.innerWidth * 0.14);
  const [actualWidth, setActualWidth] = useState(window.innerWidth * 1.14);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(1);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const handleNext = () => {
    const updatedCollection = [...collection.slice(1), collection[0]]; // Move the first item to the end
    setCollection(updatedCollection);
  };
  const handlePrevious = () => {
    const updatedCollection = [
      collection[collection.length - 1],
      ...collection.slice(0, -1),
    ];
    setCollection(updatedCollection);
  };
  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth * 0.14);
      setActualWidth(window.innerWidth * 1.14);
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  const divRefs = useRef([]);

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
                entry.target.children[1].classList.add("animateRight");
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
              entry.target.children[0].classList.add("animateLeft");
              entry.target.children[1].classList.add("animateRight");
            }
            if (entry.target.id === "div4") {
              if (counts[3] < 1) {
                const array = counts;
                array[3] = 1;
                setCounts(array);
                typingEffect2(entry);
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
                entry.target.children[1].classList.add("animateRight");
              }
            }
            if (entry.target.id === "div7") {
              if (counts[6] < 1) {
                const array = counts;
                array[6] = 1;
                setCounts(array);
                entry.target.classList.add("fadeInAnimation");
              }
            }
            if (entry.target.id === "div8") {
              if (counts[7] < 1) {
                const array = counts;
                array[7] = 1;
                setCounts(array);
                entry.target.classList.add("fadeInAnimation");
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
      updateContent.target?.children[0]?.children[1]?.innerText;
    const contentDescription =
      updateContent.target?.children[0]?.children[2]?.innerText;
    updateContent.target.children[0].children[1].innerText = "";
    updateContent.target.children[0].children[2].innerText = "";
    for (let i = 0; i <= contentHeading.length; i++) {
      setTimeout(() => {
        updateContent.target.children[0].children[1].innerText =
          contentHeading.substring(0, i);
      }, i * 15);
    }
    for (let i = 0; i <= contentDescription.length; i++) {
      setTimeout(() => {
        updateContent.target.children[0].children[2].innerText =
          contentDescription.substring(0, i);
      }, i * 15);
    }
  };
  const typingEffect2 = (event) => {
    const updateContent = event;
    const contentDescription = updateContent.target?.innerText;
    for (let i = 0; i <= contentDescription.length; i++) {
      setTimeout(() => {
        updateContent.target.innerText = contentDescription.substring(0, i);
      }, i * 15);
    }
  };
  // const typingEffect3 = (event) => {
  //   const updateContent = event;
  //   const contentDescription = updateContent.innerText;
  //   for (let i = 0; i <= contentDescription.length; i++) {
  //     setTimeout(() => {
  //       updateContent.innerText = contentDescription.substring(0, i);
  //     }, i * 15);
  //   }
  // };

  return (
    <div>
      <div id="div7" ref={(el) => (divRefs.current[6] = el)}>
        <HeaderHome />
      </div>
      <div id="div8" ref={(el) => (divRefs.current[7] = el)}>
        <IDSImage />
      </div>
      <div
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="pLR67 justify-between mt-32 mR3 flex column "
      >
        <div className=" w100 newsContent pL0 ">
          <span className="fs-12 mb-5">NEWS</span>
          <h3 className="fs-27 leading-10 mb-9">
            A new studio, deep in the heart of Dehradun
          </h3>
          <p className="fs-17 leading-6">
            Hello, Uttarakhand! We couldn’t be more excited to announce that
            we’re{" "}
            <NavLink to="/studios" className="border-bottom pointer">
              expanding our presence with a new studio in Dehradun City
            </NavLink>
            . This expansion underscores our commitment to innovative
            architecture and serving the Dehradun community with excellence.
          </p>
        </div>
        <div className="w48 w100  mRT3 ">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Studio{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/studios" className="border-bottom pointer">
              <img
                src={doonOfficePictures[currentPictureIndex]}
                className="news1Image"
                alt="imagehome1"
              ></img>
            </NavLink>
          </div>
          <div className="flex mt-6">
            <RiArrowLeftSLine
              className={`${currentPictureIndex === 1 ? "pointer" : ""}`}
              onClick={() => {
                setCurrentPictureIndex(currentPictureIndex === 1 ? 0 : 0);
              }}
              style={{
                color: currentPictureIndex === 0 ? "gray" : "black",
                fontSize: "1.875rem",
                marginRight: "10px",
                marginLeft: "-8px",
              }}
            />
            <RiArrowRightSLine
              className={`${currentPictureIndex === 0 ? "pointer" : ""}`}
              onClick={() => {
                setCurrentPictureIndex(currentPictureIndex === 0 ? 1 : 1);
              }}
              style={{
                color: currentPictureIndex === 1 ? "gray" : "black",
                fontSize: "1.875rem",
              }}
            />
          </div>
        </div>
      </div>
      <div
        id="div2"
        ref={(el) => (divRefs.current[1] = el)}
        className="mt-32 mL3 flex column pLR67 justify-between"
      >
        <div className=" mRT3 w100 newsContent pL0 ">
          <span className="fs-12 mb-5">IT'S NOT A MOMENT, IT'S A MINDSET</span>
          <h3 className="fs-27 leading-10 mb-9">Celebrating Earth Month</h3>
          <p className="fs-17 leading-6 mb-9">
            As a leader in sustainable architecture, Sahastra Architects is
            dedicated to promoting eco-friendly designs and practices. This
            Earth Month, we reaffirm our commitment to creating a greener, more
            sustainable future for our planet. Join us in our mission to protect
            and preserve the environment through innovative and responsible
            architecture.
          </p>
          {/* <p className="fs-17 leading-6 ">
            <span className="border-bottom">
              See how sustainability is woven into everything we do.
            </span>
            .
          </p> */}
        </div>
        <div className="w48 w100 text-right ">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/sun-n-soil-backpackers-hostel">
              <img
                src={earthImage}
                className="news1Image"
                alt="imagehome1"
              ></img>
            </NavLink>
          </div>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div
        id="div3"
        ref={(el) => (divRefs.current[2] = el)}
        className="mt-32 flex pLR67 column justify-between"
      >
        <div className="w48 w100 ">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/rukkbay-cafe">
              <img src={monk} alt="Old Green Man" className="news1Image"></img>
            </NavLink>
          </div>
          <div>
            <p className="fs-13 mt-4 ">Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w48 w100 mRT3">
          <div className="imageHover">
            <div className="imageHoverBox">
              View Project{" "}
              <FaArrowUpRightFromSquare
                style={{ fontSize: "12px", marginLeft: "4px" }}
              />
            </div>
            <NavLink to="/projects/rukkbay-cafe">
              <img src={tree} alt="blue tree" className="news1Image"></img>
            </NavLink>
          </div>
          <div className="text-right">
            <p className="fs-13 mt-4 ">Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 relative">
        <h2
          id="div4"
          ref={(el) => (divRefs.current[3] = el)}
          className="fs-30 mb-10 w-full text-center pLR67"
        >
          Be inspired: Introducing{" "}
          <span className="underline">a new collection of client insights</span>
        </h2>
        <div className="collection-container ">
          <div
            style={{
              marginLeft: -width,
              width: actualWidth,
              maxWidth: actualWidth,
            }}
            className="collection"
          >
            {collection.map((item, id) => {
              return (
                <div key={id} className="collectionList relative mr-7">
                  <div className="imageHoverBox">
                    View Project{" "}
                    <FaArrowUpRightFromSquare
                      style={{ fontSize: "12px", marginLeft: "4px" }}
                    />
                  </div>
                  <NavLink className="w-full" to={`projects/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="collectionImage"
                    ></img>
                  </NavLink>

                  <p className="gray text-base text-justify font-semibold div7 leading-6">
                    {item.description}{" "}
                  </p>
                  {window.innerWidth > 550 && (id === 0 || id === 5) ? (
                    <div className="overlay"></div>
                  ) : window.innerWidth < 550 && (id === 0 || id === 4) ? (
                    <div className="overlay"></div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex mt-14 absolute right-24">
          <RiArrowLeftSLine
            className="pointer"
            onClick={() => {
              handlePrevious();
            }}
            style={{
              fontSize: "30px",
              marginRight: "10px",
              marginLeft: "-8px",
            }}
          />
          <RiArrowRightSLine
            className="pointer"
            onClick={() => {
              handleNext();
            }}
            style={{
              fontSize: "30px",
            }}
          />
        </div>
      </div>
      <div
        id="div5"
        ref={(el) => (divRefs.current[4] = el)}
        className="pLR67 justify-between mt-52 column mR3 flex"
      >
        <div className=" w100 newsContent pL0 ">
          <div></div>
          <h3 className="fs-27 leading-10 mb-9">Designer Spotlight</h3>
          <p className="fs-17 leading-6">
            For the design director of our Dehradun studio,{" "}
            <span className="border-bottom">
              the design process is always an opportunity for exploration (and
              fun){" "}
            </span>
            . Discover the visionary designs of Abhinav Gupta, CEO of Sahastra
            Architects. Explore how his innovative approach transforms spaces
            into timeless masterpieces.
          </p>
        </div>
        <div className="w48 w100 mRT3">
          <img
            src={spotlightPictures[currentSpotlightIndex]}
            className="news1Image"
            alt="spotlight"
          ></img>
          <div className="flex mt-6">
            <RiArrowLeftSLine
              className={`${currentSpotlightIndex === 0 ? "" : "pointer"}`}
              onClick={() => {
                setCurrentSpotlightIndex(currentSpotlightIndex === 1 ? 0 : 0);
              }}
              style={{
                color: currentSpotlightIndex === 0 ? "gray" : "",
                fontSize: "30px",
                marginRight: "10px",
                marginLeft: "-8px",
              }}
            />
            <RiArrowRightSLine
              className={`${currentSpotlightIndex === 1 ? "" : "pointer"}`}
              onClick={() => {
                setCurrentSpotlightIndex(currentSpotlightIndex === 0 ? 1 : 1);
              }}
              style={{
                color: currentSpotlightIndex === 1 ? "gray" : "",
                fontSize: "30px",
              }}
            />
          </div>
        </div>
      </div>

      <div
        id="div6"
        ref={(el) => (divRefs.current[5] = el)}
        className="flex m3 mt-32 items-center justify-center"
      >
        <div className="greenbg p-16 pt-12">
          <div></div>
          {window.innerWidth < 550 ? (
            <p className="fs-27 white leading-9 mb-8">
              Every project is an opportunity to make the world a better,
              healthier place.
            </p>
          ) : (
            <p className="fs-27 white leading-9 mb-8">
              Every project is an opportunity to
              <br></br> make the world a better, healthier<br></br>
              place.
            </p>
          )}
          <span className="fs-17 white border-bottom-white leading-6">
            #Projects for a Better World.
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Home;
