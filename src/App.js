import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";

// Apps
import Apps from "./components/pages/Apps";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="main-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apps" component={Apps} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
