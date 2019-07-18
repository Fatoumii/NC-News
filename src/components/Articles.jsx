import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils";
import Vote from "./Votes";
import propType from "prop-types";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: "",
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="singleArticles">
        <div className="dropdown">
          <form onSubmit={this.handleSubmit}>
            <select className="sortby" onChange={this.handleChange}>
              <option>...</option>
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
            </select>
            <button type="submit">Sort</button>
          </form>
        </div>
        {isLoading ? (
          "Loading..."
        ) : this.props.topic ? (
          <p className="articlePageHeader">{`ARTICLES ON ${this.props.topic.toUpperCase()}:`}</p>
        ) : (
          <p className="articlePageHeader">{"ALL ARTICLES:"}</p>
        )}
        {isLoading
          ? ""
          : articles.map(article => {
              return (
                <div key={article.article_id} className="articleCard">
                  <Vote
                    votes={article.votes}
                    id={article.article_id}
                    section="articles"
                  />
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="articleTitle"
                  >
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
    const { topic } = this.props;
    this.fetchArticles({ topic });
  };

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { topic } = this.props;
    const { sort_by } = this.state; //new state

    this.fetchArticles({ sort_by });
  };
}

Articles.propType = {
  topic: propType.string.isRequired,
  sort_by: propType.string.isRequired
};
export default Articles;
