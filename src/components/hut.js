import hangingFlowerPot from "../images/home/hanging flower pot.webp";
import flowerPot from "../images/home/flower pot.png";
import desk from "../images/home/desk.jpg";
import vastu1 from "../images/home/vastu1.jpg";
import vastu2 from "../images/home/vastu2.jpg";
import vastu3 from "../images/home/vastu3.jpg";

function Hut() {
  return (
    <div className="">
      <div className="relative hutContainer ">
        <div className="hutHoverText">
          Hover here to unlock the secrets of IDS!
        </div>
        <div className="hutBorder topLeft"></div>
        <div className="hutBorder  topRight"></div>
        <div className="hutBorder left"></div>
        <div className="hutBorder right"></div>
        <div className="hutBorder bottom"></div>
        <div className="chimney">
          <div className="chimneyWall chimneyLeft"></div>
          <div className="chimneyWall chimneyTop"></div>
          <div className="chimneyWall chimneyRight"></div>
        </div>
        <img
          src={hangingFlowerPot}
          alt="flower pot"
          className="hangingFlowerPot flowerHover"
        ></img>
        <img
          src={flowerPot}
          alt="flower pot"
          className="flowerPot flowerHover"
        ></img>
        <div className="flowerLabel">Landscape</div>
        <div className="vastuContainer">
          <div className="vastu ">
            <img src={vastu1} alt="vastu" className="w-full h-full"></img>
          </div>
          <div className="vastu ">
            <img src={vastu2} alt="vastu" className="w-full h-full"></img>
          </div>
          <div className="vastu ">
            <img src={vastu3} alt="vastu" className="w-full h-full"></img>
          </div>
          <div className="vastuLabel">Vastu</div>
        </div>
        <div className="deskContainer">
          <img src={desk} alt="desk" className="desk"></img>
          <div className="deskLabel">Interior</div>
        </div>
        <div className="exterior">Exterior</div>
      </div>
    </div>
  );
}

export default Hut;
