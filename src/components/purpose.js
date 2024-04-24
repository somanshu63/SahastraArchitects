import shiv from "../images/purpose/shiv.jpg";
import rukkbay from "../images/purpose/rukkbay.jpeg";
import gym from "../images/purpose/gym.jpeg";
import sns from "../images/purpose/sns.jpg";
import twh from "../images/purpose/twh.jpg";
import sns2 from "../images/purpose/sns2.jpg";

function Purpose() {
  return (
    <div>
      <div className="pLR67 mt-8">
        <p className="mr-3 fw-700 ">Our Purpose</p>

        <p className="ml-20 mt-28 mb-36 fs-36 font-semibold leading-tight">
          Design has the power to inspire<br></br> joy, uplift lives, and
          strengthen<br></br> the spirit of community.
        </p>
      </div>
      <div className="mt-32 flex">
        <div className="w50 text-right">
          <img src={shiv} className="ourPurposeImage" alt="shiv wall"></img>
          <div>
            <p className="fs-13 mt-4 ">The Hungry Hobbit Cafe </p>
            <p className="fs-13 mt-6 gray">Rishikesh</p>
          </div>
        </div>
        <div className="w50 newsContent">
          <h3 className="fs-33 leading-10 mb-9 fw-700">
            We're in it for the greater good.
          </h3>
          <p className="fs-17 leading-6 pr-8">
            Our goal is to design places that make a positive difference in the
            world. That’s why people are at the heart of everything we do.
          </p>
        </div>
      </div>
      <div className="mt-32 flex pLR67  justify-between">
        <div className="w-355">
          <img
            src={rukkbay}
            alt="rukkbay"
            className="parallelImagesRight"
          ></img>
          <div>
            <p className="fs-13 mt-4 ">The Rukkbay Cafe </p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
        <div className="w-727 mt-72">
          <img src={gym} alt="gym" className="parallelImagesLeft  mr-8"></img>
          <div>
            <p className="fs-13 mt-4 ">Volvarine Gym</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 flex pLR67  justify-end">
        <div className="mr-32">
          <img src={sns} alt="sun n soil farm" className="w-4x3"></img>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel </p>
            <p className="fs-13 mt-6 gray">Jolly Grant</p>
          </div>
        </div>
        <div className="mt-350">
          <img src={twh} alt="the white house" className="w-4x3"></img>
          <div>
            <p className="fs-13 mt-4 ">The White House</p>
            <p className="fs-13 mt-6 gray">Dehradun</p>
          </div>
        </div>
      </div>
      <div className="mt-32 flex">
        <div className="w50 text-right">
          <img src={sns2} className="ourPurposeImage" alt="sun n soil"></img>
          <div>
            <p className="fs-13 mt-4 ">Sun n Soil Backpackers Hostel </p>
            <p className="fs-13 mt-6 gray">Jolly Grant</p>
          </div>
        </div>
        <div className="w50 newsContent">
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

      <div className="px-44 mt-32 w-3/4">
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
