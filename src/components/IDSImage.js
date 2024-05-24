import structure from "../images/home/structure.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function IDSImage() {
  return (
    <div>
      <div className="structure relative mt-14">
        <div className="structureImageOverlay">
          What's hidden in this image? Hover to see!
        </div>

        <NavLink to="/vastu-solutions">
          <div className="structureVastu"></div>
          <div className="vastuLabelStructure label">Vastu</div>
        </NavLink>
        <NavLink to="/landscape-designs">
          <div className="structureLandscape"></div>
          <div className="landscapeLabelStructure label">Landscape</div>
        </NavLink>
        <NavLink to="interior-designs">
          <div className="structureInterior"></div>
          <div className="structureInterior2"></div>
          <div className="interiorLabelStructure label">Interior</div>
        </NavLink>
        <img
          src={structure}
          alt="structure"
          className="w-full h-full structureImage"
        ></img>
      </div>
    </div>
  );
}
export default IDSImage;
