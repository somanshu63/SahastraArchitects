import React, { useEffect } from "react";
import { useState } from "react";
import { headerImagesArray } from "../data";

function HeaderHome(props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headerImagesArray.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="home">
        <img
          src={headerImagesArray[index].image}
          className="image"
          alt="image2"
        ></img>
      </div>
      <div className="content-right pLR67">
        <div>
          <p className="fs-13 mt-12 ">{headerImagesArray[index].name}</p>
          <p className="fs-13 mt-6 gray">{headerImagesArray[index].artist}</p>
        </div>
      </div>
    </>
  );
}

export default HeaderHome;
