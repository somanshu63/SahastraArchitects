import AbhinavGupta from "../images/home/AbhinavGupta.jpeg";
import { useRef, useEffect, useState } from "react";
function People() {
  const divRefs = useRef([]);
  const [inView, setInView] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(entry.target.id);
            if (entry.target.id === "div1") {
              typingEffect(entry);
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
    </div>
  );
}
export default People;
