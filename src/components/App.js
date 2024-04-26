import Home from "./home";
import { Route, Switch } from "react-router-dom";
import Work from "./work";
import { useState, useRef, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import Purpose from "./purpose";
import People from "./people";
import Studios from "./studios";
import News from "./news";
import Career from "./career";
import { FaArrowUp } from "react-icons/fa6";

function App() {
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
        <Route path="/purpose">
          <Purpose />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/studios">
          <Studios />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/career">
          <Career />
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
