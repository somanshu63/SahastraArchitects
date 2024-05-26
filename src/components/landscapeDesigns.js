import landscapeBanner from "../images/IDS/landscapeBanner.webp";
import landscapePoster1 from "../images/IDS/landscapePoster1.jpeg";

function LandscapeDesigns() {
  return (
    <div className="-mt-3">
      <div className="vastuBannerContainer relative">
        <img
          src={landscapeBanner}
          alt="vastu banner"
          className="w-full h-full "
        ></img>
        <div className="vastuBannerOverlay">Landscape Designs</div>
      </div>
      <div className="flex justify-between mt-32 pLR67">
        <div className="w-1/2">
          <h3 className="fs-27 leading-10 mb-9">Landscape Designs</h3>
          <p className="fs-17 leading-7 mb-6">
            Landscape design is the art of planning and creating outdoor spaces
            to achieve aesthetic, functional, and environmental goals. At
            Sahastra Architects, we love transforming outdoor spaces into
            beautiful, functional, and sustainable environments.
          </p>
        </div>
        <div className="w48">
          <img
            src={landscapePoster1}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
    </div>
  );
}
export default LandscapeDesigns;
