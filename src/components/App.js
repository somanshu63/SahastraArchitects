import Home from "./home";
import { Route, Switch } from "react-router-dom";
import Work from "./work";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Purpose from "./purpose";
import People from "./people";
import Studios from "./studios";
import News from "./news";
import Career from "./career";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
