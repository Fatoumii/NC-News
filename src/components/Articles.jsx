import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils";
import Vote from "./Votes";
import propType from "prop-types";
import { navigate } from "@reach/router/lib/history";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="singleArticles">
        <form onSubmit={this.handleSubmit}>
          <select className="sortby" onChange={this.handleChange}>
            <option>Sort by:</option>
            <option value="created_at desc">Date (descending)</option>
            <option value="created_at asc">Date (ascending)</option>
            <option value="comment_count desc">
              Comment Count (descending)
            </option>
            <option value="comment_count asc">Comment Count (ascending)</option>
            <option value="votes desc">Vote (descending)</option>
            <option value="votes asc">Vote (ascending)</option>
          </select>
        </form>

        {isLoading ? (
          "Loading..."
        ) : this.props.topic ? (
          <p className="articlePageHeader">{`ARTICLES ON ${this.props.topic.toUpperCase()}`}</p>
        ) : (
          <p className="articlePageHeader">{"ALL ARTICLES"}</p>
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

                    <h5 className="articleAuthorDate">
                      {article.created_at}
                      {article.author}
                      {/* Comments: {article.comment_count} popup?*/}
                    </h5>
                  </Link>
                </div>
              );
            })}
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    if (
      topic !== prevProps.topic ||
      sort_by !== prevState.sort_by ||
      order !== prevState.order
    ) {
      this.fetchArticles(topic, sort_by, order);
    }
  };

  componentDidMount = async => {
    const { topic, sort_by, order } = this.props;
    this.fetchArticles(topic, sort_by, order);
  };

  fetchArticles = async (topic, sort_by, order) => {
    try {
      const articles = await api.getArticles(topic, sort_by, order);
      this.setState({ articles, isLoading: false });
    } catch (err) {
      navigate("/error", {
        state: {
          message: "Oops! The page could not be found."
        },
        replace: true
      });
    }
  };

  handleChange = event => {
    const { topic, sort_by, order } = this.props;

    this.setState({
      sort_by: event.target.value.split(" ")[0],
      order: event.target.value.split(" ")[1]
    });
    this.fetchArticles(topic, sort_by, order);
  };
}

Articles.propType = {
  topic: propType.string.isRequired,
  sort_by: propType.string.isRequired
};
export default Articles;
