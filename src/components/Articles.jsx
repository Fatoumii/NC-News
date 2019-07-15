import React, { Component } from "react";
import Nav from "./Nav";
import TopArticles from "./TopArticles";
import * as api from "../utils";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { topics } = this.props;
    const { articles } = this.state;
    return (
      <>
        <Nav topics={topics} />
        <TopArticles />
        <ArticleCard articles={articles} />
      </>
    );
  }
  // componentDidUpdate = (prevProps, prevState) => {
  //   const title = this.props.topics !== prevProps.topic;
  //   if (title) this.fetchArticles();
  // };

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    api.getArticles().then(data => {
      this.setState({ articles: data });
    });
  };
}

export default Articles;
