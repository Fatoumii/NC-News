import React, { Component } from "react";
import * as api from "../utils";

class TopArticles extends Component {
  state = {
    articles: [],
    sort_by: "votes",
    order: "asc"
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="topArticles">
        <p className="topArticleTitle">TOP ARTICLES</p>
        <h5>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="topArticleNames">
                {article.title}
              </li>
            );
          })}
        </h5>
      </div>
    );
  }
  fetchTopArticles = () => {
    const { topic, sort_by = "votes", order } = this.props;
    api.getArticles(topic, sort_by, order).then(articles => {
      this.setState({ articles, sort_by, order });
    });
  };
  componentDidMount = () => {
    this.fetchTopArticles();
  };
}
export default TopArticles;
