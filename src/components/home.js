import react, { useState, useRef, useEffect } from "react";
import earthImage from "../images/home/earthImage.jpeg";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import HeaderHome from "./headerHome";
import DoonOffice1 from "../images/home/DoonOffice2.jpg";
import DoonOffice2 from "../images/home/DoonOffice1.jpg";
import tree from "../images/home/tree.jpeg";
import monk from "../images/home/monk.jpeg";
import house1 from "../images/work images/the wooden white house.jpg";
import spotlight1 from "../images/home/spotlight1.jpeg";
import gardenInDesert from "../images/home/gardenInDesert.jpg";
import gym from "../images/purpose/gym.jpeg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import landscape1 from "../images/home/landscape1.jpg";
import spotlight2 from "../images/home/spotlight1.jpg";
import { collectionArray } from "../data";

const doonOfficePictures = [DoonOffice1, DoonOffice2];
const spotlightPictures = [spotlight1, spotlight2];

function Home(props) {
  const [collection, setCollection] = useState(collectionArray);
  const [width, setWidth] = useState(window.innerWidth * 0.14);
  const [actualWidth, setActualWidth] = useState(window.innerWidth * 1.14);

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(1);
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
  return (
    <div>
      <HeaderHome />
      <div className="pLR67 justify-between mt-32 mR3 flex column ">
        <div className=" w100 newsContent pL0 paddingRight75">
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
            .
          </p>
        </div>
        <div className="w48 w100 mRT3 ">
          <NavLink to="/studios" className="border-bottom pointer">
            <img
              src={doonOfficePictures[currentPictureIndex]}
              className="news1Image"
              alt="imagehome1"
            ></img>
          </NavLink>
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
      <div className="mt-32 mL3 flex column pLR67 justify-between">
        <div className=" mRT3 w100 newsContent pL0 ">
          <span className="fs-12 mb-5">IT'S NOT A MOMENT, IT'S A MINDSET</span>
          <h3 className="fs-27 leading-10 mb-9">Celebrating Earth Month</h3>
          <p className="fs-17 leading-6 mb-9 ">
            As designers, we feel a deep responsibility to our fellow humans and
            the planet we call home. We take respecting and restoring the
            environment as our mandate to ensure a future where all can thrive.{" "}
          </p>
          {/* <p className="fs-17 leading-6 ">
            <span className="border-bottom">
              See how sustainability is woven into everything we do.
            </span>
            .
          </p> */}
        </div>
        <div className="w48 w100 text-right">
          <NavLink to="/projects/sun-n-soil-backpackers-hostel">
            <img src={earthImage} className="news1Image" alt="imagehome1"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 flex pLR67 column justify-between">
        <div className="w48 w100 ">
          <NavLink to="/projects/rukkbay-cafe">
            <img
              src={monk}
              alt="Old Green Man"
              className="news1Image  mr-8"
            ></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w48 w100 mRT3">
          <NavLink to="/projects/rukkbay-cafe">
            <img src={tree} alt="blue tree" className="news1Image"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 relative">
        <h2 className="fs-30 mb-10 w-full text-center pLR67">
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
                  <NavLink className="w-full" to={`projects/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="collectionImage"
                    ></img>
                  </NavLink>

                  <p className="gray text-base font-semibold  leading-6">
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
      <div className="pLR67 justify-between mt-52 column mR3 flex">
        <div className=" w100 newsContent pL0 paddingRight75">
          <h3 className="fs-27 leading-10 mb-9">Designer Spotlight</h3>
          <p className="fs-17 leading-6">
            For the design director of our Dehradun studio,{" "}
            <span className="border-bottom">
              the design process is always an opportunity for exploration (and
              fun){" "}
            </span>
            .
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
      <div className="mt-32 column mL3 flex pLR67 justify-between">
        <div className=" mRT3 w100 newsContent pL0 ">
          <span className="fs-12 mb-5">INSIGHTS</span>
          <h3 className="fs-27 leading-10 mb-9">Garden in the Desert</h3>
          <p className="fs-17 leading-6 ">
            {/* <span className="border-bottom"> */}
            In the desert, a green oasis blooms, a vibrant contrast to the sandy
            surroundings. This lush garden offers a serene escape, showcasing
            nature's resilience
            {/* </span> */}.
          </p>
        </div>
        <div className="w48 w100 mRT3 text-right">
          <img src={gardenInDesert} className="news1Image" alt="desert"></img>
        </div>
      </div>
      <div className="flex m3 mt-32 items-center justify-center">
        <div className="  greenbg p-16 pt-12">
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
      </div>
      <div className="flex mt-32 pLR67 column justify-between">
        <div className="w48 w100">
          <NavLink to="/projects/the-wooden-white-house">
            <img
              src={house1}
              alt="The Wooden White House"
              className="news1Image"
            ></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">The Wooden White House </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w48 w100 mRT3">
          <NavLink to="/projects/karma-retreat">
            <img
              src={landscape1}
              alt="the karma retreat"
              className="news1Image  mr-8"
            ></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">The Karma Retreat </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w100 pLR67 mR3 mL3 mt-32">
        <div className="w100">
          <NavLink to="/projects/the-volvarine-gym">
            <img src={gym} alt="gym" className="news1Image"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">The Volvarine Gym </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end w100 mt-32">
        <div className="insights">
          <span className="fs-12">INSIGHTS</span>
          <h3 className="fs-27 leading-10 mb-7 mt-7">
            {" "}
            A new higher education building inspires wonder and learning
          </h3>

          <p className="fs-17 leading-6 ">
            <span className="border-bottom">#InspiringEdifice</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
