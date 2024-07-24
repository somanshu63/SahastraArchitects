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
import Gallery from "./gallery";
import Sitemap from "./sitemap";
import Faqs from "./faqs";
import ContactUs from "./contactUs";
import Dashboard from "./dashboard";

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
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/faqs" component={Faqs}></Route>
        <Route path="/admin-faqs" component={Faqs}></Route>
        <Route path="/contact-us">
          <ContactUs />
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
        <Route path="/sitemap">
          <Sitemap />
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
