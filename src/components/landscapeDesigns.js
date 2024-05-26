import landscapeBanner from "../images/IDS/landscapeBanner.webp";
import landscapePoster1 from "../images/IDS/landscapePoster1.jpeg";
import keyElements from "../images/IDS/keyElementsOfLandscape.png";
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
          <p className="fs-17 leading-6 mb-6">
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
      <div className="flex justify-between mt-32 pLR67">
        <div className="w-1/2">
          <h3 className="fs-27 leading-10 mb-9">Key Elements:</h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Plants and Vegetation:</span>
              We carefully choose trees, shrubs, flowers, and lawns that thrive
              in your climate and add visual charm to your space.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Hardscape Elements:</span>
              Think pathways, patios, decks, walls, and fences made from
              materials like stone, brick, and wood to create structure and
              style.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Water Features:</span>
              Ponds, fountains, and waterfalls bring a touch of tranquility and
              movement to your garden.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Lighting:</span>
              We use lighting to ensure safety and to highlight the beautiful
              features of your landscape, making it enchanting at night.
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold">Structures and Furniture:</span>
              From cozy gazebos to stylish outdoor furniture, we create
              comfortable and durable spaces for relaxation and entertaining.
            </li>
          </ul>
        </div>
        <div className="w48">
          <img src={keyElements} className="news1Image" alt="landscape "></img>
        </div>
      </div>
      <div className="flex justify-between mt-32 pLR67">
        <div className="w-1/2">
          <h3 className="fs-27 leading-10 mb-9">Key Elements:</h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
          </ul>
        </div>
        <div className="w48">
          <img
            src={landscapePoster1}
            className="news1Image"
            alt="landscape "
          ></img>
        </div>
      </div>
      <div className="flex justify-between mt-32 pLR67">
        <div className="w-1/2">
          <h3 className="fs-27 leading-10 mb-9">Key Elements:</h3>
          <ul>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
            <li className="fs-17 dot leading-6 mb-4">
              <span className="font-bold"></span>
            </li>
          </ul>
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
