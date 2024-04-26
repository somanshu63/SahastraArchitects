import React, { useEffect } from "react";
import { useState } from "react";

import image4 from "../images/home/2.bmp.jpg";
import petrolPump from "../images/home/petrolpump.png";
import haveli from "../images/home/haveliFront.jpg";

import landscape from "../images/home/landscape1.jpg";
import landscape2 from "../images/home/landscape2.jpg";
import residential2 from "../images/work images/residential2.jpg";
import residential4 from "../images/work images/residential4.jpg";
import residential9 from "../images/work images/residential9.jpg";
import negi from "../images/work images/negi.jpg";
import house3 from "../images/home/house3.jpg";
function HeaderHome(props) {
  const imagesArray = [
    {
      image: residential2,
      name: "The White Villa",
      artist: "Dehradun",
    },
    {
      image: negi,
      name: "The Bungalow",
      artist: "New Delhi",
    },

    {
      image: image4,
      name: "5 Star Hotel",
      artist: "Mussoorie",
    },

    {
      image: house3,
      name: "AIHTM",
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
