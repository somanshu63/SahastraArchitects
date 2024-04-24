import fachade from "../images/news/fachade.jpg";
import earth from "../images/news/earth.jpg";
import imola from "../images/news/imola.jpg";
import shanghai from "../images/news/shanghai.jpg";
import yokohama from "../images/news/yokohama.jpg";
import mini from "../images/news/mini.jpg";
import soho from "../images/news/soho.jpg";
import soil from "../images/news/soil.jpg";
import biomimicry from "../images/news/biomimicry.jpg";

const news = [
  {
    name: "Urban Bloom / AIM Architecture + Urban Matters Installations & Structures",
    image: shanghai,
  },
  {
    name: "7 Architects Create 7 New Community Spaces Beneath a Disused Japanese Overpass",
    image: yokohama,
  },
  {
    name: "MINI LIVING's First Permanent Building Will Transform a Paint Factory into a Co-living Hotspot in Shanghai",
    image: mini,
  },
  {
    name: "SO-IL and MINI LIVING Develop Housing Prototype for Resource-Conscious Shared Living",
    image: soil,
  },
  {
    name: "SOHO China Property Mogul Zhang Xin on the Chinese Economy and Her Changing Business Model",
    image: soho,
  },
  {
    name: "Financial Times Article Details How Biomimicry Can be Applied to Architecture",
    image: biomimicry,
  },
  {
    name: "CityLab Article Details da Vinci's Technically Astounding Map of Imola",
    image: imola,
  },
];

function News() {
  return (
    <div>
      <div className="flex pL67 mt-32">
        <div className="w50 newsContent">
          <h3 className="fs-27 leading-10 mb-9 ">
            Innovation in Sustainable Architecture with Solar Façades
          </h3>
          <p className="fs-17 leading-6 pr-8">
            ZEB Living Lab is a research building that stands out for its
            pioneering initiative among zero-emission buildings, seeking to have
            a significant impact on the future. Located in Trondheim, Norway, it
            is much more than just a building; it is a tangible manifestation of
            the global commitment to sustainability and innovation.
          </p>
        </div>
        <div className="w50 text-right">
          <img src={fachade} className="ourPurposeImage" alt="fachade"></img>
        </div>
      </div>
      <div className="flex pR67 mt-32">
        <div className="w50 text-right">
          <img src={earth} className="ourPurposeImage" alt="earth"></img>
        </div>
        <div className="w50  newsContent">
          <h3 className="fs-27 leading-10 mb-9 ">
            Earth Day 2024: Urban and Architectural Strategies to Navigate the
            Climate Crisis
          </h3>
          <p className="fs-17 leading-6 ">
            Every year, Earth Day, celebrated on April 22, presents us with an
            opportunity to contemplate the conditions of our planet and our
            impact upon it. Generating around 37% of global carbon emissions,
            the construction industry has an important, often detrimental, role
            to play, thus placing an increasingly urgent responsibility on
            architects and builders to devise strategies for reducing this
            number.
          </p>
        </div>
      </div>
      <div className="mt-32 flex justify-end pLR67">
        <div className=" graybg w-1/2 p-16 pt-12">
          <p className="fs-27 white leading-9 mb-8">Are you a journalist?</p>
          <span className="fs-17 white border-bottom-white leading-6">
            Send us your inquiry here.
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-14 pLR67 mt-32">
        <div className="flex items-center">
          <div className="line"></div>
          <p className="ml-7 fs-27 ">News</p>
        </div>
        <ul>
          <li className="fs-17">All</li>
          {/* <li>Map</li>
            <li>List</li> */}
        </ul>
      </div>
      <ul className="flex pLR67 projectsList  items-start">
        {news.map((news, id) => {
          return (
            <li key={id} className="w-250 mb-12 mr-7 ">
              <img
                src={news.image}
                alt={news.name}
                className="w-250 mb-6"
              ></img>
              <p className="fs-17 mb-3 leading-7">{news.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default News;
