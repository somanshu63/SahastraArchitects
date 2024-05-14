import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { projectsArray } from "../data";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { HiHome } from "react-icons/hi2";

function SingleProject(props) {
  const projectSlug = props.match.params.slug;
  const [project, setProject] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    projectsArray.filter((project) => {
      project.projects.filter(
        (project) => project.slug === projectSlug && setProject(project)
      );
    });
  }, []);
  useEffect(() => {
    project && setLoading(false);
  }, [project]);

  return (
    <div className="pLR67 mRT3">
      {loading ? (
        <div class="load"></div>
      ) : (
        <div>
          <div>
            <img
              src={project?.image[0]}
              className="w-full h-60 "
              alt={project.alt}
            ></img>
            {/* {project?.image.length > 1 ? (
              <div className="flex mt-4 float-right">
                <RiArrowLeftSLine
                  className="pointer"
                  onClick={() => {
                    setCurrentImageIndex(
                      currentImageIndex === 0
                        ? project.image.length - 1
                        : currentImageIndex - 1
                    );
                  }}
                  style={{
                    fontSize: "1.875rem",
                    marginRight: "10px",
                  }}
                />
                <RiArrowRightSLine
                  className="pointer"
                  onClick={() => {
                    setCurrentImageIndex(
                      project.image.length - 1 === currentImageIndex
                        ? 0
                        : currentImageIndex + 1
                    );
                  }}
                  style={{
                    fontSize: "1.875rem",
                  }}
                />
              </div>
            ) : (
              ""
            )} */}
          </div>
          <div className="flex mt-32 justify-between ">
            <div className="mb-32">
              <h3 className=" fs-27">{project?.name}</h3>
              {project?.name ? (
                <p className="fs-17 mt-8 gray flex items-center">
                  <FaLocationDot style={{ marginRight: "12px" }} />
                  {project.location}
                </p>
              ) : (
                ""
              )}
              {project?.size ? (
                <p className="fs-17 mt-8 gray flex items-center">
                  <HiHome style={{ marginRight: "12px" }} />
                  {project.size}
                </p>
              ) : (
                ""
              )}
              {project?.year ? (
                <p className="fs-17 mt-8 gray flex items-center">
                  <SlCalender style={{ marginRight: "12px" }} />

                  {project.year}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w48">
              {project?.image.map((image, i) => {
                return i !== 0 ? (
                  <img
                    src={image}
                    alt={image}
                    key={i}
                    className="w-full  mb-16  h-80"
                  ></img>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default withRouter(SingleProject);
