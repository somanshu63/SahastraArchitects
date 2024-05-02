import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { projectsArray } from "../data";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

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

  console.log(project);

  return (
    <div className="pLR67 mRT3">
      {loading ? (
        <div class="load"></div>
      ) : (
        <div>
          <div>
            <img
              src={project?.image[currentImageIndex]}
              className="w-full h-60 "
              alt={project.alt}
            ></img>
            {project?.image.length > 1 ? (
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
            )}
          </div>
          <div>
            <h3 className="mt-32 fs-27">{project?.name}</h3>
            <p className="fs-17 mt-8 gray">{project.location}</p>
            <p className="fs-17 mt-8 gray">{project.size}</p>
            <p className="fs-17 mt-8 gray">{project.year}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default withRouter(SingleProject);
