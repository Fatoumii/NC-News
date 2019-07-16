import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articles">
        {this.props.topic ? (
          <h4>{`Articles on ${this.props.topic[0].toUpperCase() +
            this.props.topic.slice(1, this.props.topic.length)}:`}</h4>
        ) : (
          <h4>{"All articles:"}</h4>
        )}

        {articles.map(article => {
          return (
            <div key={article.article_id} className="articleCard">
              <Link to={`/articles/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      this.fetchArticles();
    }
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}
export default Articles;
