"use client";
import { ImageGallery } from "react-image-grid-gallery";
import cycle from "../images/home/cycle.jpeg";
import kitchen from "../images/home/kitchen.jpeg";
import sns from "../images/home/sns.png";

// singleProject
import hobbit1 from "../images/singleProject/hobbit cafe1.jpeg";
import hobbit2 from "../images/singleProject/hobbit cafe2.jpeg";
import hobbit3 from "../images/singleProject/hobbit cafe01.jpeg";
import hobbit4 from "../images/singleProject/hobbit cafe02.jpeg";
import star5 from "../images/singleProject/5star.jpg";
import star51 from "../images/singleProject/5 star hotel 2.jpg";
import star52 from "../images/singleProject/5 star hotel 3.jpg";
import rukkbay1 from "../images/singleProject/rukkbay cafe1.jpeg";
import rukkbay2 from "../images/singleProject/rukkbay cafe2.jpeg";
import rukkbay3 from "../images/home/cycle.jpeg";
import rukkbay4 from "../images/home/tree.jpeg";
import rukkbay5 from "../images/home/spotlight1.jpeg";
import gym from "../images/singleProject/the volvarine gym.jpg";
import gati1 from "../images/singleProject/gati1.jpg";
import gati2 from "../images/singleProject/gati2.jpg";
import karma from "../images/home/haveli.png";
import haveli2 from "../images/home/landscape1.jpg";
import karma2 from "../images/home/landscape2.jpg";
import haveli from "../images/home/haveliFront.jpg";
import theWoodenWhiteHouse1 from "../images/singleProject/the wooden white house.jpg";
import theWhiteVilla1 from "../images/singleProject/the white villa 1.jpg";
import theWhiteVilla2 from "../images/singleProject/the white villa 2.jpg";
import theLakeViewVilla from "../images/singleProject/the lake view villa.jpg";
import theBlueHeavenResidence1 from "../images/singleProject/the blue heaven residence1.jpg";
import theBlueHeavenResidence2 from "../images/singleProject/the blue heaven residence2.jpg";
import theGreeneryVilla1 from "../images/singleProject/the greenery villa 1.jpg";
import theGreeneryVilla2 from "../images/singleProject/the greenery villa 2.jpg";
import theLuxuriousHouse from "../images/singleProject/the luxurious house.jpg";
import apartment from "../images/singleProject/apartment.jpg";
import theRedHouse1 from "../images/singleProject/the red house1.jpeg";
import theRedHouse2 from "../images/singleProject/the red house2.jpeg";
import theNegisHouse1 from "../images/singleProject/the negi house1.jpg";
import theNegisHouse2 from "../images/singleProject/the negi house1.jpg";
import theGuptasHome1 from "../images/singleProject/the gupta's home1.jpg";
import theGuptasHome2 from "../images/singleProject/the gupta's home2.jpg";
import theBackpackersStay1 from "../images/singleProject/backpackers stay1.jpg";
import theBackpackersStay2 from "../images/singleProject/backpackers stay2.jpg";
import aihtm from "../images/singleProject/aihtm.jpg";
import sns2 from "../images/purpose/sns.jpg";
import sns3 from "../images/purpose/sns2.jpg";
import sns4 from "../images/singleProject/sns4.jpg";
import sns5 from "../images/home/spotlight1.jpg";
import sns6 from "../images/home/earthImage.jpeg";
import theWoodenBrownHouse from "../images/singleProject/the wooden brown house.jpg";

const imagesArray = [
  {
    src: hobbit3,
  },
  {
    src: hobbit4,
  },
  {
    src: star51,
  },
  {
    src: sns5,
  },
  {
    src: sns6,
  },
  {
    src: sns4,
  },
  {
    src: theWoodenWhiteHouse1,
  },
  {
    src: theWhiteVilla1,
  },
  {
    src: theLakeViewVilla,
  },
  {
    src: theBlueHeavenResidence1,
  },
  {
    src: theGreeneryVilla1,
  },
  {
    src: theLuxuriousHouse,
  },
  {
    src: apartment,
  },
  {
    src: theRedHouse1,
  },
  {
    src: theNegisHouse1,
  },
  {
    src: theGuptasHome1,
  },
  {
    src: theBackpackersStay1,
  },
  {
    src: aihtm,
  },
  {
    src: sns2,
  },
  {
    src: theWoodenBrownHouse,
  },
  {
    src: theBlueHeavenResidence2,
  },
  {
    src: cycle,
  },
  {
    src: kitchen,
  },
  {
    src: sns,
  },
  {
    src: star52,
  },
  {
    src: rukkbay2,
  },
  {
    src: rukkbay3,
  },
  {
    src: rukkbay4,
  },
  {
    src: rukkbay5,
  },
  {
    src: gati2,
  },
  {
    src: karma2,
  },
  {
    src: haveli,
  },
  {
    src: theBlueHeavenResidence1,
  },
  {
    src: hobbit1,
  },
  {
    src: star5,
  },
  {
    src: rukkbay1,
  },
  {
    src: gym,
  },
  {
    src: gati1,
  },
  {
    src: karma,
  },
  {
    src: haveli2,
  },
  {
    src: theWhiteVilla2,
  },
  {
    src: theGreeneryVilla2,
  },
  {
    src: theRedHouse2,
  },
  {
    src: theNegisHouse2,
  },
  {
    src: theGuptasHome2,
  },
  {
    src: theBackpackersStay2,
  },
  {
    src: sns3,
  },
];

export default function Gallery() {
  return (
    <div className="pLR67 mt-32">
      <h3 className="fs-27 leadin-10 mb-9 ">Gallery</h3>
      <ImageGallery
        imagesInfoArray={imagesArray}
        columnCount={"auto"}
        columnWidth={230}
        gapSize={24}
      />
    </div>
  );
}
