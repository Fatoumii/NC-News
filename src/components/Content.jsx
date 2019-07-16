import React, { Component } from "react";
import Nav from "./Nav";
import TopArticles from "./TopArticles";
import Articles from "./Articles";

class Content extends Component {
  render() {
    const { topics } = this.props;
    return (
      <>
        <Nav topics={topics} />
        <TopArticles />
        <Articles />
      </>
    );
  }
}

export default Content;
