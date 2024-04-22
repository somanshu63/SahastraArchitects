import DoonOffice2 from "../images/home/DoonOffice2.jpg";
import haridwarOffice from "../images/home/DoonOffice3.jpg";

function Studios() {
  return (
    <div className="pLR67">
      <p className="fs-42 fw-700 px-20 leading-tight mt-32">
        With studio cultures unique to <br></br> their place and people, we’re{" "}
        <br></br> the smallest “big firm” out <br></br>
        there.
      </p>
      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27 fw-700 ">Our Studios</p>
      </div>
      <ul className="flex items-start">
        <li className="w-250 mb-12 mr-8">
          <img
            src={DoonOffice2}
            alt="projects"
            className="w-250 mb-6 h-48"
          ></img>
          <p className="fs-17 mb-3 fw-700 leading-7">Dehradun</p>
        </li>
        <li className="w-250 mb-12 ">
          <img
            src={haridwarOffice}
            alt="projects"
            className="w-250 mb-6 h-48"
          ></img>
          <p className="fs-17 mb-3 fw-700 leading-7">Haridwar</p>
        </li>
      </ul>
    </div>
  );
}
export default Studios;
