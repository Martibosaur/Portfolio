import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

// Apps
import QRCodeGenerator from "./pages/apps/QRCodeGenerator";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="main-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/apps/qr-code-generator"
              component={QRCodeGenerator}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
