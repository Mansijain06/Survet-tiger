import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreatePage from "./pages/CreatePage";
import Publish from "./pages/Publish";
import pic from "./image/pic.png";

function App() {
  return (
    <div className="App">
      <Router>
        <img className="pic" src={pic} alt="image" />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/create" exact component={CreatePage} />
          <Route path="/publish" exact component={Publish} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
