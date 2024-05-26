import react, { useRef, useState, Component, useEffect } from "react";
import DoonOffice2 from "../images/home/DoonOffice2.jpg";
import haridwarOffice from "../images/home/DoonOffice3.jpg";
import MapWithMarkers from "./map";

function Studios() {
  const divRefs = useRef([]);
  const [inView, setInView] = useState(null);
  const [counts, setCounts] = useState([0, 0]);

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
            if (entry.target.id === "div2") {
              if (counts[1] < 1) {
                const array = counts;
                array[1] = 1;
                setCounts(array);
                entry?.target.classList.add("fadeInAnimation");
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

  return (
    <div className="pLR67 mRT3">
      <div
        id="div2"
        ref={(el) => (divRefs.current[1] = el)}
        className=" relative"
      >
        <MapWithMarkers />
        <div className="mapOverlay"></div>
      </div>

      <p
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="fs-36 fw-700 px-20  leading-tight mt-32"
      >
        With studio cultures unique to their place and people, we’re the
        smallest “big firm” out there.
      </p>

      <div className="flex items-center mt-32 mb-16">
        <div className="line"></div>
        <p className="ml-7 fs-27  ">Our Studios</p>
      </div>
      <ul className="flex items-start">
        <li className="w-250O mr-8">
          <img
            src={DoonOffice2}
            alt="projects"
            className="w-250I mb-6 h-48"
          ></img>
          <p className="text-base font-bold mb-3  leading-7">Dehradun</p>
        </li>
        <li className="w-250O ">
          <img
            src={haridwarOffice}
            alt="projects"
            className="w-250I mb-6 h-48"
          ></img>
          <p className="text-base font-bold mb-3  leading-7">Haridwar</p>
        </li>
      </ul>
    </div>
  );
}
export default Studios;
