import React, { useEffect } from "react";
import { useState } from "react";

import image4 from "../images/home/2.bmp.jpg";
import petrolPump from "../images/home/petrolpump.png";
import haveli from "../images/home/haveliFront.jpg";

import landscape from "../images/home/landscape1.jpg";
import landscape2 from "../images/home/landscape2.jpg";

function HeaderHome(props) {
  const imagesArray = [
    {
      image: haveli,
      name: "Haveli",
      artist: "Chandigarh",
    },
    {
      image: landscape,
      name: "The Karma Retreat",
      artist: "Dehradun",
    },
    {
      image: petrolPump,
      name: "Petrol Pump",
      artist: "Dehradun",
    },
    {
      image: image4,
      name: "5 Star Hotel",
      artist: "Mussoorie",
    },

    {
      image: landscape2,
      name: "The Karma Retreat",
      artist: "Dehradun",
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="home">
        <img
          src={imagesArray[index].image}
          className="image"
          alt="image2"
        ></img>
      </div>
      <div className="content-right pLR67">
        <div>
          <p className="fs-13 mt-12 ">{imagesArray[index].name}</p>
          <p className="fs-13 mt-6 gray">{imagesArray[index].artist}</p>
        </div>
      </div>
    </>
  );
}

export default HeaderHome;
