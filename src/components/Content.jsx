import React, { Component } from "react";
import Nav from "./Nav";
import TopArticles from "./TopArticles";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import { Router } from "@reach/router";

class Content extends Component {
  render() {
    const { topic, topics } = this.props;
    return (
      <>
        <Nav topics={topics} />
        <TopArticles />
        <Router className="singleArticle">
          <Articles path="/" topic={topic} />
          <SingleArticle path="/:articleID" topic={topic} />
        </Router>
      </>
    );
  }
}

export default Content;
