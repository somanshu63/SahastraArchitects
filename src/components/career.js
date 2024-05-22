import { useState, useEffect, useRef } from "react";
function Career() {
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
    const contentHeading =
      updateContent.target?.children[0]?.children[0]?.innerText;
    const contentDescription =
      updateContent.target?.children[0]?.children[1]?.innerText;
    updateContent.target.children[0].children[1].innerText = "";
    updateContent.target.children[0].children[0].innerText = "";
    for (let i = 0; i <= contentHeading.length; i++) {
      setTimeout(() => {
        updateContent.target.children[0].children[0].innerText =
          contentHeading.substring(0, i);
      }, i * 15);
    }
    for (let i = 0; i <= contentDescription.length; i++) {
      setTimeout(() => {
        updateContent.target.children[0].children[1].innerText =
          contentDescription.substring(0, i);
      }, i * 10);
    }
  };

  return (
    <div>
      <div
        id="div1"
        ref={(el) => (divRefs.current[0] = el)}
        className="greenbg pLR67 mRT3"
      >
        <div className=" py-32 px-20">
          <p className="fs-36 white leading-tight mb-12 ">
            Make your move.<br></br> Join our team.
          </p>
          <p className="fs-17 white  leading-6">
            Drop Down Your Portfolio and Resume to
            <span className="border-bottom-white"> sahastraa@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Career;
