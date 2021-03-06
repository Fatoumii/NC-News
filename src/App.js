import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./content.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Home from "./components/Home";
import * as api from "./utils";
import Error from "./components/Error";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;

    return (
      <div className="App">
        <Heading />
        <Router className="content">
          <Home path="/" />
          <Content path="/articles/*" topics={topics} />
          <Content path="/topics/:topic" topics={topics} />
          <Error default path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(data => {
      this.setState({ topics: data });
    });
  };
}

export default App;
