import react, { useState, useRef, useEffect } from "react";
import earthImage from "../images/home/earthImage.JPG";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import HeaderHome from "./headerHome";
import DoonOffice1 from "../images/home/DoonOffice2.jpg";
import DoonOffice2 from "../images/home/DoonOffice1.jpg";
import recycled from "../images/home/recycled.jpg";
import tree from "../images/home/tree.jpeg";
import monk from "../images/home/monk.jpeg";
import house1 from "../images/home/house1.jpg";
import house3 from "../images/home/house3.jpg";
import cycle from "../images/home/cycle.jpeg";
import spotlight1 from "../images/home/spotlight1.jpeg";
// import spotlight2 from "../images/home/spotlight2.jpeg";
import gardenInDesert from "../images/home/gardenInDesert.jpg";
import showCase2 from "../images/home/2222.jpg";
import showCase1 from "../images/home/showCase1.png";
import haveli from "../images/home/haveli.png";
import gym from "../images/purpose/gym.jpeg";
import kitchen from "../images/home/kitchen.jpeg";
import sns from "../images/home/sns.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import landscape1 from "../images/home/landscape1.jpg";
import spotlight2 from "../images/home/spotlight1.jpg";

const doonOfficePictures = [DoonOffice1, DoonOffice2];
const spotlightPictures = [spotlight1, spotlight2];

const collectionArray = [
  {
    image: house1,
    alt: "house",
    description:
      "Modern Living, Timeless Charm: Balconies, Sleek Design, and Tranquil Surroundings.",
  },
  {
    image: cycle,
    alt: "cycle",
    description:
      "Yellow bicycle in store with man at counter. Casual, urban scene.",
  },
  {
    image: house3,
    alt: "house",
    description:
      "Modern apartment with clock, white exterior, fenced property, tree, blue sky, and birds.",
  },

  {
    image: gym,
    alt: "gym",
    description:
      "Let's work together to achieve your goals and elevate your wellbeing.",
  },
  {
    image: kitchen,
    alt: "kitchen",
    description:
      "Elevate cooking with us! Top appliances, expert guidance, culinary delights.",
  },
  {
    image: sns,
    alt: "sns",
    description:
      "Adventure at Sun n Soil Hostel: Comfort, community, unforgettable experiences!",
  },
];

function Home(props) {
  const containerRef = useRef(null);
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
      <div className="pL67 mt-32 flex">
        <div className="w50 newsContent">
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
        <div className="w50">
          <img
            src={doonOfficePictures[currentPictureIndex]}
            className="news1Image"
            alt="imagehome1"
          ></img>
          <div className="flex mt-6">
            <RiArrowLeftSLine
              className={`${currentPictureIndex === 1 ? "pointer" : ""}`}
              onClick={() => {
                setCurrentPictureIndex(currentPictureIndex === 1 ? 0 : 0);
              }}
              style={{
                color: currentPictureIndex === 0 ? "gray" : "black",
                fontSize: "30px",
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
                fontSize: "30px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-32 flex">
        <div className="w50 text-right">
          <img src={earthImage} className="earthImage" alt="imagehome1"></img>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w50 newsContent">
          <span className="fs-12 mb-5">IT'S NOT A MOMENT, IT'S A MINDSET</span>
          <h3 className="fs-27 leading-10 mb-9">Celebrating Earth Month</h3>
          <p className="fs-17 leading-6 mb-9 pr-8">
            As designers, we feel a deep responsibility to our fellow humans and
            the planet we call home. We take respecting and restoring the
            environment as our mandate to ensure a future where all can thrive.{" "}
          </p>
          {/* <p className="fs-17 leading-6 pr-8">
            <span className="border-bottom">
              See how sustainability is woven into everything we do.
            </span>
            .
          </p> */}
        </div>
      </div>
      <div className="mt-32 flex pLR67  justify-between">
        <div className="w-727 mt-72">
          <img
            src={monk}
            alt="Old Green Man"
            className="parallelImagesLeft  mr-8"
          ></img>
          <div>
            <p className="fs-13 mt-4 ">Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w-355">
          <img src={tree} alt="blue tree" className="parallelImagesRight"></img>
          <div>
            <p className="fs-13 mt-4 ">Hobbit Cafe </p>
            <p className="fs-13 mt-6 gray">Rishikesh</p>
          </div>
        </div>
      </div>
      <div className="mt-32 relative">
        <h2 className="fs-30 mb-10 w-full text-center">
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
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="collectionImage"
                  ></img>
                  <p className="gray text-base font-semibold  leading-6">
                    {item.description}{" "}
                  </p>
                  {id === 0 || id === 5 ? <div className="overlay"></div> : ""}
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
      <div className="pL67 mt-52 flex">
        <div className="w50 newsContent">
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
        <div className="w50">
          <img
            src={spotlightPictures[currentSpotlightIndex]}
            className="news1Image"
            alt="imagehome1"
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
      <div className="mt-32 flex">
        <div className="w50 text-right">
          <img
            src={gardenInDesert}
            className="earthImage"
            alt="imagehome1"
          ></img>
        </div>
        <div className="w50 newsContent">
          <span className="fs-12 mb-5">INSIGHTS</span>
          <h3 className="fs-27 leading-10 mb-9">Garden in the Desert</h3>
          <p className="fs-17 leading-6 pr-8">
            {/* <span className="border-bottom"> */}
            In the desert, a green oasis blooms, a vibrant contrast to the sandy
            surroundings. This lush garden offers a serene escape, showcasing
            nature's resilience
            {/* </span> */}.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" m-28 greenbg p-16 pt-12">
          <p className="fs-27 white leading-9 mb-8">
            Every project is an opportunity to<br></br> make the world a better,
            healthier<br></br>
            place.
          </p>
          <span className="fs-17 white border-bottom-white leading-6">
            #Projects for a Better World.
          </span>
        </div>
      </div>
      <div className="flex pLR67  justify-between">
        <div className="w-355">
          <img
            src={house1}
            alt="interior"
            className="parallelImagesRight"
          ></img>
          <div>
            <p className="fs-13 mt-4 ">5 Star Hotel </p>
            <p className="fs-13 mt-6 gray">Mussoorie</p>
          </div>
        </div>
        <div className="w-727 mt-72">
          <img
            src={landscape1}
            alt="villa"
            className="parallelImagesLeft  mr-8"
          ></img>
          <div>
            <p className="fs-13 mt-4 ">The Blue Haven Residence </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-32">
        <div>
          <img src={gym} alt="haveli" className="bigImage"></img>
          <div>
            <p className="fs-13 mt-4 ">Karma Retreat </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-32">
        <div className="insights">
          <span className="fs-12">INSIGHTS</span>
          <h3 className="fs-27 leading-10 mb-7 mt-7">
            {" "}
            A new higher education building inspires wonder and learning
          </h3>

          <p className="fs-17 leading-6 pr-8">
            <span className="border-bottom">#InspiringEdifice</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
