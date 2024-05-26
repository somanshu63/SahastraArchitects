import Home from "./home";
import { Route, Switch, withRouter } from "react-router-dom";
import Work from "./work";
import { useState, useRef, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Purpose from "./purpose";
import People from "./people";
import Studios from "./studios";
import { FaArrowUp } from "react-icons/fa6";
import SingleProject from "./singleProject";
import VastuSolutions from "./vastuSolutions";
import InteriorDesigns from "./interiorDesigns";
import FacadeDesigns from "./facadeDesigns";
import LandscapeDesigns from "./landscapeDesigns";
import Ids from "./ids";

function App(props) {
  const [sidebar, setSidebar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/projects/:slug" component={SingleProject}></Route>
        <Route path="/purpose">
          <Purpose />
        </Route>
        <Route path="/integrated-design-solutions">
          <Ids />
        </Route>
        <Route path="/vastu-solutions">
          <VastuSolutions />
        </Route>
        <Route path="/landscape-designs">
          <LandscapeDesigns />
        </Route>
        <Route path="/interior-designs">
          <InteriorDesigns />
        </Route>
        <Route path="/facade-designs">
          <FacadeDesigns />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/studios">
          <Studios />
        </Route>
      </Switch>

      <Footer />

      {scrollY > 300 ? (
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="upArrowContainer"
        >
          <FaArrowUp className="upArrow" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
