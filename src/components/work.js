import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import kcCcafe from "../images/kc cafe.mp4";
import Star5Hotel from "../images/5 Star Hotel.mp4";
import petrolpump from "../images/petrol pump1.mp4";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { projectsArray } from "../data";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const videos = [
  { video: kcCcafe, name: "KC Cafe", location: "Dehradun" },
  { video: petrolpump, name: "Petrol Pump", location: "Dehradun" },
  { video: Star5Hotel, name: "5 Star Hotel", location: "Mussoorie" },
];

const allProjects = projectsArray.reduce((acc, category) => {
  return acc.concat(category.projects);
}, []);

function Work() {
  const [isSelectedProjectsOpen, setIsSelectedProjectsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currectVideoIndex, setCurrentVideoIndex] = useState(0);
  const [work, setWork] = useState("grid");
  const color = `hsl(0deg 100% 50%)`;
  const [loading, setLoading] = useState(true);
  const height = window.innerWidth < 550 ? 400 : 600;
  const divRefs = useRef([]);
  const [inView, setInView] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const typingEffect = (event) => {
    const updateContent = event;

    const contentDescription = updateContent.target?.innerText;
    updateContent.targetinnerText = "";
    updateContent.target.innerText = "";

    for (let i = 0; i <= contentDescription.length; i++) {
      setTimeout(() => {
        updateContent.target.innerText = contentDescription.substring(0, i);
      }, i * 15);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(entry.target.id);
            if (entry.target.id === "div1") {
              typingEffect(entry);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="pLR67 workContainer h-full">
      <div className="relative">
        {currectVideoIndex === 0 ? (
          <video className="video" autoPlay controls>
            <source src={videos[0].video} type="video/mp4" />
          </video>
        ) : (
          ""
        )}
        {currectVideoIndex === 1 ? (
          <video className="video" autoPlay controls>
            <source src={videos[1].video} type="video/mp4" />
          </video>
        ) : (
          ""
        )}
        {currectVideoIndex === 2 ? (
          <video className="video" autoPlay controls>
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
      <p
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="ml-20 mt-36 mb-36 fw-700 fs-36"
      >
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
              setLoading(true);
              setWork("grid");
              setLoading(false);
            }}
            className={`text-base font-bold pointer ${
              work === "grid" ? "" : "gray"
            }`}
          >
            Grid
          </li>
          <li
            onClick={() => {
              setLoading(true);
              setWork("map");
              setLoading(false);
            }}
            className={`text-base font-bold pointer ml-4 ${
              work === "map" ? " " : "gray"
            }`}
          >
            Map
          </li>
          <li
            onClick={() => {
              setLoading(true);
              setWork("list");
              setLoading(false);
            }}
            className={`text-base font-bold pointer ml-4 ${
              work === "list" ? " " : "gray"
            }`}
          >
            List
          </li>
        </ul>
      </div>
      <div>
        {loading ? <div class="load"></div> : ""}
        {!loading && work === "grid" && (
          <div className="blockC">
            <ul className="flex projectsList items-start ">
              {(selectedCategory !== "All"
                ? projectsArray.find(
                    (category) => category.name === selectedCategory
                  )?.projects
                : allProjects
              ).map((project, id) => (
                <li key={id} className="w-250O mb-12 project">
                  <div className="projectHover">
                    <div className="imageHoverBox">
                      View Project{" "}
                      <FaArrowUpRightFromSquare
                        style={{ fontSize: "12px", marginLeft: "4px" }}
                      />
                    </div>
                    <NavLink to={`/projects/${project.slug}`}>
                      <img
                        src={project.image[0]}
                        alt={project.alt}
                        className="w-250I mb-6 h-44"
                      />
                    </NavLink>
                  </div>
                  <p className="text-base mb-3 font-bold leading-7">
                    {project.name}
                  </p>
                  <p className="text-xs font-bold gray">{project.location}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!loading && work === "map" && (
          <div className="mapContainer">
            <Map
              height={height}
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
          </div>
        )}
        {!loading && work === "list" && (
          <table className="w-full table pLR67">
            <tr className="text-left">
              <th className="gray underline decoration-2 fs-17 fw-700 w-1/2">
                Title
              </th>
              <th className="gray underline decoration-2 fs-17 fw-700 w-1/5">
                Location
              </th>
              <th className="gray underline decoration-2 fs-17 fw-700 ">
                Year
              </th>
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
                <NavLink to={`/projects/${project.slug}`}>
                  <td className="fs-17 fw-700">{project.name}</td>
                </NavLink>
                <td className="fs-17 gray ">{project.location}</td>
                <td className="fs-17 gray ">{project.year}</td>
                <td className="fs-17 gray ">{project.size}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}
export default Work;
