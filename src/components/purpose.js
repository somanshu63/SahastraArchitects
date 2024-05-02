import shiv from "../images/purpose/shiv.jpg";
import rukkbay from "../images/purpose/rukkbay.jpeg";
import gym from "../images/purpose/gym.jpeg";
import sns from "../images/purpose/sns.jpg";
import twh from "../images/purpose/twh.jpg";
import sns2 from "../images/purpose/sns2.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Purpose() {
  return (
    <div>
      <div className="pLR67 mt-8">
        <p className="mr-3 fw-700 ">Our Purpose</p>

        {window.innerWidth < 550 ? (
          <p className="ml-20 mt-28 mb-36 fs-36 fw-700 leading-tight">
            Design has the power to inspire joy, uplift lives, and strengthen
            the spirit of community.
          </p>
        ) : (
          <p className="ml-20 mt-28 mb-36 fs-36 fw-700 leading-tight">
            Design has the power to inspire<br></br> joy, uplift lives, and
            strengthen<br></br> the spirit of community.
          </p>
        )}
      </div>
      <div className="mt-32 column flex">
        <div className="w50 w100 pLR67 text-right">
          <NavLink to="/projects/the-wooden-brown-house">
            <img src={shiv} className="ourPurposeImage" alt="shiv wall"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">The Wooden Brown House </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w50 w100 mRT3 pLR67 newsContent paddingRight75">
          <h3 className="fs-27 leading-10 mb-9 ">
            We're in it for the greater good.
          </h3>
          <p className="fs-17 leading-6 pr-8">
            Our goal is to design places that make a positive difference in the
            world. That’s why people are at the heart of everything we do.
          </p>
        </div>
      </div>
      <div className="mt-32 column flex pLR67  justify-between">
        <div className="w-355 w100">
          <NavLink to="/projects/rukkbay-cafe">
            <img
              src={rukkbay}
              alt="rukkbay"
              className="parallelImagesRight"
            ></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">The Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w-727 mRT3 w100 mt-72">
          <NavLink to="/projects/the-volvarine-gym">
            <img src={gym} alt="gym" className="parallelImagesLeft  mr-8"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">Volvarine Gym</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 column flex pLR67  justify-end">
        <div className="mr-32 w100">
          <NavLink to="/projects/sun-n-soil-backpackers-hostel">
            <img src={sns} alt="sun n soil farm" className="w-4x3"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel </p>
            <p className="fs-13 mt-6 gray">Jolly Grant</p>
          </div>
        </div>
        <div className="mt-350 w100">
          <NavLink to="/projects/the-white-villa">
            <img src={twh} alt="the white house" className="w-4x3"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">The White Villa</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 column pLR67 flex">
        <div className="w50 w100 text-right">
          <NavLink to="/projects/sun-n-soil-backpackers-hostel">
            <img src={sns2} className="ourPurposeImage" alt="sun n soil"></img>
          </NavLink>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel </p>
            <p className="fs-13 mt-6 gray">Jolly Grant</p>
          </div>
        </div>
        <div className="w50 mRT3 w100 newsContent paddingLeft75 pL0">
          <h3 className="fs-27 leading-10  mb-9">
            We create places with meaning.
          </h3>
          <p className="fs-17 leading-6 pr-8">
            There’s so much more to architecture than what meets the eye. Every
            place has a story, and as we design, we help tell it. Our work
            enlivens neighborhoods, builds communities, energizes the citizenry,
            and respects and protects our planet.
          </p>
        </div>
      </div>
      <div className="px-44 mt-32 w-3/4 w100">
        <h3 className="fs-27 leading-10  mb-9">We design with purpose.</h3>
        <p className="fs-17 leading-6 pr-6 ">
          Several ideals ignite our passions and keep us focused on what
          matters. These core values are the building blocks of who we are and
          what we stand for. They give us purpose. We invite you to learn more
          about them, as well as our legacy, below:
        </p>
      </div>
    </div>
  );
}
export default Purpose;
