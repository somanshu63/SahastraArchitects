import React, { useEffect } from "react";
import { useState } from "react";
import image1 from "../images/home/01D.jpg";
import image2 from "../images/home/1.jpg";
import image3 from "../images/home/1159.jpg";
import image4 from "../images/home/2.bmp.jpg";
import image5 from "../images/home/20141011154529_3m9s.jpg";
import image6 from "../images/home/5 (2).jpg";
import image7 from "../images/home/IMG_1037 (2).JPG";
import image8 from "../images/home/IMG_1200.JPG";
import image9 from "../images/home/TGEG 327.JPG";
import haveli from "../images/home/haveliFront.jpg";

function HeaderHome(props) {
  const imagesArray = [
    {
      image: haveli,
      name: "Haveli",
      artist: "Chandigarh",
    },
    {
      image: image4,
      name: "5 Star Hotel",
      artist: "Mussoorie",
    },
    {
      image: image6,
      name: "Backpacker Stay",
      artist: "Tehri",
    },
    {
      image: image2,
      name: "Bungalow",
      artist: "Chandigarh",
    },
    {
      image: image5,
      name: "Gati Office",
      artist: "New Delhi",
    },
    {
      image: image1,
      name: "The White Villa",
      artist: "Dehradun",
    },
    {
      image: image3,
      name: "Bungalow",
      artist: "Jaipur",
    },
    {
      image: image3,
      name: "Bungalow",
      artist: "Jaipur",
    },
    {
      image: image3,
      name: "Bungalow",
      artist: "Jaipur",
    },
    {
      image: image7,
      name: "Hungry Hobbit Cafe",
      artist: "Rishikesh",
    },
    {
      image: image8,
      name: "Rukkbay",
      artist: "Dehradun",
    },
    {
      image: image9,
      name: "The Red House",
      artist: "Ludhiana",
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
