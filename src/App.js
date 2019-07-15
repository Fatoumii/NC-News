import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./articles.css";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Home from "./components/Home";
import * as api from "./utils";
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
          <Articles path="/articles" topics={topics} />
          <Articles path="/topics/:topic" topics={topics} />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
  };
  fetchTopics = () => {
    const { topics } = this.state;
    api.getTopics().then(data => {
      this.setState({ topics: data });
    });
  };
}

export default App;
