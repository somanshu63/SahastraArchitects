import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import star5 from "../images/work images/5star.jpg";
import ab from "../images/work images/ab.JPG";
import gati from "../images/work images/gati.jpg";
import hobbit from "../images/work images/hobbit.JPG";
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
import rukkbay from "../images/work images/rukkbay.JPG";
import gym from "../images/purpose/gym.JPG";

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
      },
      {
        name: "Hobbit Cafe",
        alt: "commercial",
        location: "Rishikesh",
        image: hobbit,
      },
      {
        name: "Rukkbay Cafe",
        alt: "commercial",
        location: "Dehradun",
        image: rukkbay,
      },
      {
        name: "Gym",
        alt: "commercial",
        location: "Dehradun",
        image: gym,
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
      },
      {
        name: "The White Villa",
        alt: "residential",
        location: "Dehradun",
        image: residential2,
      },
      {
        name: "Double Story House",
        alt: "residential",
        location: "Chandigarh",
        image: residential3,
      },
      {
        name: "The Lakeview Villa ",
        alt: "residential",
        location: "Tehri",
        image: residential4,
      },
      {
        name: "The Blue Haven Residence",
        alt: "residential",
        location: "Dehradun",
        image: residential5,
      },
      {
        name: "The Greenery Villa",
        alt: "residential",
        location: "Dehradun",
        image: residential6,
      },
      {
        name: "Modern House",
        alt: "residential",
        location: "Rishikesh",
        image: residential7,
      },
      {
        name: "The Luxurious House",
        alt: "residential",
        location: "New Delhi",
        image: residential9,
      },
      {
        name: "Apartment",
        alt: "residential",
        location: "Haridwar",
        image: residential10,
      },
      {
        name: "The Red House",
        alt: "residential",
        location: "Ludhiana",
        image: ab,
      },
      {
        name: "Backpackers Stay",
        alt: "residential",
        location: "New Tehri",
        image: johnson,
      },
      {
        name: "The Bungalow",
        alt: "residential",
        location: "New Delhi",
        image: negi,
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
  return (
    <div className="pLR67 mt-8">
      <div
        onClick={() => {
          setIsSelectedProjectsOpen(!isSelectedProjectsOpen);
        }}
        className="pointer flex items-center font-bold"
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
                className="gray fs-14 pointer"
              >
                {project.name}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
      <p className="ml-20 mt-36 mb-36 fs-42">Places that honor humanity.</p>
      <div className="flex items-center justify-between mb-14">
        <div className="flex items-center">
          <div className="line"></div>
          <p className="ml-7 fs-27 fw-700">Featured Work</p>
        </div>
        <ul>
          <li className="fs-17">Grid</li>
          {/* <li>Map</li>
            <li>List</li> */}
        </ul>
      </div>
      <ul className="flex projectsList justify-start float-left items-start mb-80">
        {selectedCategory !== "All"
          ? projectsArray
              .find((category) => category.name === selectedCategory)
              ?.projects.map((project, id) => (
                <li key={id} className="w-250 mb-12 project">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-250 mb-6 h-48"
                  ></img>
                  <p className="fs-17 mb-3 fw-700 leading-7">{project.name}</p>
                  <p className="fs-14 gray">{project.location}</p>
                </li>
              ))
          : allProjects.map((project, id) => (
              <li key={id} className="w-250 mb-12 project">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-250 mb-6 h-48"
                ></img>
                <p className="fs-17 mb-3 fw-700 leading-7">{project.name}</p>
                <p className="fs-14 gray">{project.location}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}
export default Work;
