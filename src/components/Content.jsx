import React, { Component } from "react";
import Nav from "./Nav";
import TopArticles from "./TopArticles";
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import { Router } from "@reach/router";
import propType from "prop-types";

class Content extends Component {
  render() {
    const { topic, topics } = this.props;
    return (
      <>
        <Nav topics={topics} />
        <div className="innerContent">
          <TopArticles />
        </div>
        <div className="innerContent">
          <Router className="singleArticle">
            <Articles path="/" topic={topic} />
            <SingleArticle path="/:articleID" topic={topic} />
          </Router>
        </div>
      </>
    );
  }
}
Content.propType = {
  topic: propType.string.isRequired,
  topics: propType.string.isRequired
};

export default Content;
