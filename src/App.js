import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import CustomNavbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
      </div>
    );
  }
}

export default App;
