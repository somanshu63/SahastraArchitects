import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import star5 from "../images/work images/5star.jpg";
import ab from "../images/work images/ab.jpeg";
import gati from "../images/work images/gati.jpg";
import hobbit from "../images/work images/hobbit.jpeg";
import johnson from "../images/work images/johnson.jpg";
import negi from "../images/work images/negi.jpg";
import residential1 from "../images/work images/residential1.jpg";
import residential2 from "../images/work images/residential2.jpg";
import residential3 from "../images/work images/residential3.jpg";
import residential4 from "../images/work images/residential4.jpg";
import residential5 from "../images/work images/residential5.jpg";
import residential6 from "../images/work images/residential6.jpg";
import residential7 from "../images/work images/residential7.jpg";
import residential9 from "../images/work images/residential9.jpg";
import residential10 from "../images/work images/residential10.jpg";
import rukkbay from "../images/work images/rukkbay.jpeg";
import gym from "../images/purpose/gym.jpeg";
import karma from "../images/home/haveli.png";
import haveli from "../images/home/haveliFront.jpg";
import kcCcafe from "../images/kc cafe.mp4";
import Star5Hotel from "../images/5 Star Hotel.mp4";
import petrolpump from "../images/petrol pump1.mp4";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const videos = [
  { video: Star5Hotel, name: "5 Star Hotel", location: "Mussoorie" },
  { video: kcCcafe, name: "KC Cafe", location: "Dehradun" },
  { video: petrolpump, name: "Petrol Pump", location: "Dehradun" },
];

const projectsArray = [
  { name: "All", projects: [] },
  {
    name: "Commercial",
    projects: [
      {
        name: "5 Star Hotel",
        alt: "commercial",
        location: "Mussoorie",
        image: star5,
        latitude: 30.4598,
        longitude: 78.0644,
        year: 2017,
        size: "4.0 acres",
      },

      {
        name: "Haveli",
        alt: "commercial",
        location: "Dehradun",
        image: haveli,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2020,
        size: "2.0 acres",
      },
      {
        name: "Hobbit Cafe",
        alt: "commercial",
        location: "Rishikesh",
        image: hobbit,
        latitude: 30.0869,
        longitude: 78.2676,
        year: 2016,
        size: "",
      },
      {
        name: "Rukkbay Cafe",
        alt: "commercial",
        location: "Dehradun",
        image: rukkbay,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2014,
        size: "",
      },
      {
        name: "The Volvarine Gym",
        alt: "commercial",
        location: "Dehradun",
        image: gym,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2014,
        size: "",
      },
    ],
  },
  {
    name: "Institutional",
    projects: [
      {
        name: "Gati Office",
        alt: "institutional",
        location: "New Delhi",
        image: gati,
        latitude: 28.6139,
        longitude: 77.2088,
        year: 2012,
        size: "0.25 acres",
      },
    ],
  },
  {
    name: "Landscape",
    projects: [
      {
        name: "Karma Retreat",
        alt: "landscape",
        location: "Dehradun",
        image: karma,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2018,
        size: "2.5 acres",
      },
    ],
  },

  {
    name: "Residential",
    projects: [
      {
        name: "The Wooden White House",
        alt: "residential",
        location: "Dehradun",
        image: residential1,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2016,
        size: "",
      },
      {
        name: "The White Villa",
        alt: "residential",
        location: "Dehradun",
        image: residential2,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2014,
        size: "",
      },
      {
        name: "Double Story House",
        alt: "residential",
        location: "Chandigarh",
        image: residential3,
        latitude: 30.7333,
        longitude: 76.7794,
        year: 2020,
        size: "",
      },
      {
        name: "The Lakeview Villa ",
        alt: "residential",
        location: "New Tehri",
        image: residential4,
        latitude: 30.3739,
        longitude: 78.4325,
        year: 2017,
        size: "",
      },
      {
        name: "The Blue Haven Residence",
        alt: "residential",
        location: "Dehradun",
        image: residential5,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2013,
        size: "",
      },
      {
        name: "The Greenery Villa",
        alt: "residential",
        location: "Dehradun",
        image: residential6,
        latitude: 30.316496,
        longitude: 78.032188,
        year: 2014,
        size: "",
      },
      {
        name: "Modern House",
        alt: "residential",
        location: "Rishikesh",
        image: residential7,
        latitude: 30.0869,
        longitude: 78.2676,
        year: 2021,
        size: "",
      },
      {
        name: "The Luxurious House",
        alt: "residential",
        location: "New Delhi",
        image: residential9,
        latitude: 28.6139,
        longitude: 77.2088,
        year: 2019,
        size: "",
      },
      {
        name: "Apartment",
        alt: "residential",
        location: "Haridwar",
        image: residential10,
        latitude: 29.9457,
        longitude: 78.1642,
        year: 2021,
        size: "",
      },
      {
        name: "The Red House",
        alt: "residential",
        location: "Ludhiana",
        image: ab,
        latitude: 30.901,
        longitude: 75.8573,
        year: 2023,
        size: "",
      },
      {
        name: "Backpackers Stay",
        alt: "residential",
        location: "New Tehri",
        image: johnson,
        latitude: 30.3739,
        longitude: 78.4325,
        year: 2024,
        size: "",
      },
      {
        name: "The Bungalow",
        alt: "residential",
        location: "New Delhi",
        image: negi,
        latitude: 28.6139,
        longitude: 77.2088,
        year: 2020,
        size: "",
      },
    ],
  },
];
const allProjects = projectsArray.reduce((acc, category) => {
  return acc.concat(category.projects);
}, []);

function Work() {
  const [isSelectedProjectsOpen, setIsSelectedProjectsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currectVideoIndex, setCurrentVideoIndex] = useState(0);
  const [work, setWork] = useState("grid");
  const [hue, setHue] = useState(0);
  const color = `hsl(0deg 100% 50%)`;

  return (
    <div className="pLR67 mt-8 workContainer">
      <div className="relative">
        {currectVideoIndex === 0 ? (
          <video className="video" controls autoPlay>
            <source src={videos[0].video} type="video/mp4" />
          </video>
        ) : (
          ""
        )}
        {currectVideoIndex === 1 ? (
          <video className="video" controls autoPlay>
            <source src={videos[1].video} type="video/mp4" />
          </video>
        ) : (
          ""
        )}
        {currectVideoIndex === 2 ? (
          <video className="video" controls autoPlay>
            <source src={videos[2].video} type="video/mp4" />
          </video>
        ) : (
          ""
        )}
        <p className="fs-13 text-center mt-12 absolute w-full -bottom-9 flex justify-center">
          {`${videos[currectVideoIndex].name}, ${videos[currectVideoIndex].location}`}
        </p>
        <RiArrowLeftSLine
          onClick={() => {
            setCurrentVideoIndex((prevIndex) => Math.max(prevIndex - 1, 0));
          }}
          className="absolute  -bottom-12 pointer left-0"
          style={{
            color: currectVideoIndex === 0 ? "gray" : "black",
            fontSize: "2.5rem",
          }}
        />
        <RiArrowRightSLine
          onClick={() => {
            setCurrentVideoIndex((prevIndex) =>
              Math.min(prevIndex + 1, videos.length - 1)
            );
          }}
          className="absolute -bottom-12 pointer right-0"
          style={{
            color: currectVideoIndex === videos.length - 1 ? "gray" : "black",
            fontSize: "2.5rem",
          }}
        />
      </div>
      <div
        onClick={() => {
          setIsSelectedProjectsOpen(!isSelectedProjectsOpen);
        }}
        className="pointer flex items-center font-bold mt-32"
      >
        <p className="mr-3 ">Selected Projects</p>
        {isSelectedProjectsOpen ? (
          <RiArrowUpSLine style={{ fontSize: "30px" }} />
        ) : (
          <RiArrowDownSLine style={{ fontSize: "30px" }} />
        )}
      </div>
      {isSelectedProjectsOpen ? (
        <ul className="selectedProjectsGrid mt-6">
          {projectsArray.map((project, id) => {
            return (
              <li
                key={id}
                onClick={() => {
                  setSelectedCategory(project.name);
                }}
                className={`fs-14 pointer ${
                  selectedCategory === project.name ? "" : "gray"
                }`}
              >
                {project.name}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
      <p className="ml-20 mt-36 mb-36 fw-700 fs-36">
        Places that honor humanity.
      </p>
      <div className="flex items-center justify-between mb-14">
        <div className="flex items-center">
          <div className="line"></div>
          <p className="ml-7 fs-27 ">Featured Work</p>
        </div>
        <ul className="flex items-center">
          <li
            onClick={() => {
              setWork("grid");
            }}
            className={`text-base font-bold pointer ${
              work === "grid" ? "" : "gray"
            }`}
          >
            Grid
          </li>
          <li
            onClick={() => {
              setWork("map");
            }}
            className={`text-base font-bold pointer ml-4 ${
              work === "map" ? " " : "gray"
            }`}
          >
            Map
          </li>
          <li
            onClick={() => {
              setWork("list");
            }}
            className={`text-base font-bold pointer ml-4 ${
              work === "list" ? " " : "gray"
            }`}
          >
            List
          </li>
        </ul>
      </div>
      {work === "grid" && (
        <ul className="flex projectsList float-left items-start mb-80">
          {(selectedCategory !== "All"
            ? projectsArray.find(
                (category) => category.name === selectedCategory
              )?.projects
            : allProjects
          ).map((project, id) => (
            <li key={id} className="w-250O mb-12 project">
              <img
                src={project.image}
                alt={project.alt}
                className="w-250I mb-6 h-48"
              />
              <p className="text-base mb-3 font-bold leading-7">
                {project.name}
              </p>
              <p className="text-xs font-bold gray">{project.location}</p>
            </li>
          ))}
        </ul>
      )}

      {work === "map" && (
        <Map
          height={600}
          width={"100%"}
          defaultCenter={[30.316496, 78.032188]}
          defaultZoom={7}
        >
          <ZoomControl />
          {(selectedCategory !== "All"
            ? projectsArray.find(
                (category) => category.name === selectedCategory
              )?.projects
            : allProjects
          ).map((project, id) => (
            <Marker
              key={id}
              width={30}
              anchor={[project.latitude, project.longitude]}
              color={color}
            />
          ))}
        </Map>
      )}
      {work === "list" && (
        <table className="w100 table pLR67">
          <tr className="text-left">
            <th className="gray underline decoration-2 fs-17 fw-700 w-1/2">
              Title
            </th>
            <th className="gray underline decoration-2 fs-17 fw-700 w-1/5">
              Location
            </th>
            <th className="gray underline decoration-2 fs-17 fw-700 ">Year</th>
            <th className="gray underline decoration-2 fs-17 fw-700 w-22">
              Size
            </th>
          </tr>
          {(selectedCategory !== "All"
            ? projectsArray.find(
                (category) => category.name === selectedCategory
              )?.projects
            : allProjects
          ).map((project, id) => (
            <tr>
              <td className="fs-17 fw-700">{project.name}</td>
              <td className="fs-17 gray ">{project.location}</td>
              <td className="fs-17 gray ">{project.year}</td>
              <td className="fs-17 gray ">{project.size}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
export default Work;
