import AbhinavGupta from "../images/home/AbhinavGupta.jpeg";
import { useRef, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import gb from "../images/people/gb.webp";
import v5e from "../images/people/v5e.jpg";
import nb from "../images/people/nb.jpeg";
import { keyPrinciplesData } from "../data";

function People() {
  const divRefs = useRef([]);
  const [inView, setInView] = useState(null);
  const [isKPOpen, setIsKPOpen] = useState(false);
  const [counts, setCounts] = useState([0]);
  const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(entry.target.id);
            if (entry.target.id === "div1") {
              if (counts[0] < 1) {
                const array = counts;
                array[0] = 1;
                setCounts(array);
                typingEffect(entry);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    divRefs.current.forEach((div) => {
      if (div) {
        observer.observe(div);
      }
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) {
          observer.unobserve(div);
        }
      });
    };
  }, []);
  const typingEffect = (event) => {
    const updateContent = event;

    const contentDescription = updateContent.target?.innerText;
    updateContent.targetinnerText = "";
    updateContent.target.innerText = "";

    for (let i = 0; i <= contentDescription.length; i++) {
      setTimeout(() => {
        updateContent.target.innerText = contentDescription.substring(0, i);
      }, i * 15);
    }
  };

  // function fadeOut() {
  //   document
  //     .getElementsByClassName("KPOverlay")[0]
  //     .classList.add("fadeOutAnimation");
  // }
  return (
    <div className="pLR67 mt-52">
      <p
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="fs-36 fw-700 mx-20 leading-tight mt-32"
      >
        We're creative thinkers with a passion for design and compassion for our
        communities.
      </p>
      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27 ">Leadership</p>
      </div>
      <div className="w-250O mb-12 ">
        <img
          src={AbhinavGupta}
          alt="projects"
          className="w-250I object-cover mb-6"
        ></img>
        <p className="text-base font-bold mb-3  leading-7">Abhinav Gupta</p>
        <p className="text-xs font-bold gray">CEO</p>
      </div>
      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27 ">Our Founder's Key Principles</p>
      </div>
      <div className="flex items-start justify-between">
        <div
          onClick={() => {
            setIsKPOpen(true);
            setIndex(0);
          }}
          className="keyPrinciples"
        >
          <div className="keyPrinciplesOverlay ">
            Green Buildings{" "}
            <span className="fs-12 discoverMore">Discover More</span>{" "}
          </div>
          <img className="w-full h-full " src={gb} alt="gb"></img>
        </div>
        <div
          onClick={() => {
            setIsKPOpen(true);
            setIndex(1);
          }}
          className="keyPrinciples"
        >
          <div className="keyPrinciplesOverlay ">
            Vastu Science{" "}
            <span className="fs-12 discoverMore">Discover More</span>
          </div>
          <img className="w-full h-full " src={v5e} alt="v5e"></img>
        </div>
        <div
          onClick={() => {
            setIsKPOpen(true);
            setIndex(2);
          }}
          className="keyPrinciples"
        >
          <div className="keyPrinciplesOverlay ">
            Natural Buildings{" "}
            <span className="fs-12 discoverMore">Discover More</span>
          </div>
          <img className="w-full h-full " src={nb} alt="nb"></img>
        </div>
      </div>
      {isKPOpen ? (
        <div className="KPOverlay">
          <div className="flex justify-end">
            <IoClose
              onClick={() => {
                // fadeOut();
                setIsKPOpen(false);
              }}
              className=" pointer"
              style={{ fontSize: "2rem", color: "white" }}
            />
          </div>
          <div className="flex items-start">
            <div className="w-1/3 mr-8">
              <img
                className="w-full h-full "
                src={keyPrinciplesData[index].image.src}
                alt={keyPrinciplesData[index].image.alt}
              ></img>
            </div>
            <div className="text-white w-3/5">
              <h1 className="fs-27 mb-8">{keyPrinciplesData[index].name}</h1>

              <ul className="mb-6">
                <li className="fs-17 leading-7 mb-4 dot">
                  {keyPrinciplesData[index].li1}
                </li>
                <li className="fs-17 leading-7 mb-4 dot">
                  {keyPrinciplesData[index].li2}
                </li>
                <li className="fs-17 leading-7 mb-4 dot">
                  {keyPrinciplesData[index].li3}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default People;
