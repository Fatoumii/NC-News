import React, { Component } from "react";
import * as api from "../utils";
import { Link } from "@reach/router";

class TopArticles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div data-cy="topArticlesHeader" className="topArticles">
        <p className="topArticleTitle">TOP ARTICLES</p>
        {articles.slice(0, 5).map(article => {
          return (
            <li key={article.article_id} className="topArticleNames">
              >
              <Link
                to={`/articles/${article.article_id}`}
                data-cy={article.article_id}
                className="topArticleNames"
              >
                {article.title}
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
  fetchTopArticles = () => {
    const { topic, sort_by = "votes" } = this.props;
    api.getArticles(topic, sort_by).then(articles => {
      this.setState({ articles, sort_by });
    });
  };
  componentDidMount = () => {
    this.fetchTopArticles();
  };
}
export default TopArticles;
