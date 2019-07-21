import React from "react";
import * as api from "../utils";
import "../content.css";
import Comments from "./Comments";
import propType from "prop-types";
import { navigate } from "@reach/router/lib/history";

class SingleArticle extends React.Component {
  state = {
    article: [],
    isLoading: true
  };
  render() {
    const {
      isLoading,
      article: { title, body, author, created_at, article_id, votes }
    } = this.state;
    return (
      <section>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="innerSingleArticle">
            <div className="singleArticleBody">
              <h3>{title}</h3>
              <h5>
                Author: <i>{author}</i>
                <br />
                <i>{created_at}</i>
                <br />
                <br />
                <bold className="articleVotes">Article votes: {votes}</bold>
              </h5>
              <p>{body}</p>
            </div>
            <br />
            <Comments article_id={article_id} />
          </div>
        )}
      </section>
    );
  }

  fetchSingleArticle = async articleID => {
    try {
      const article = await api.singleArticle(articleID);
      this.setState({ article, isLoading: false });
    } catch (err) {
      navigate("/error", {
        state: {
          message: "Oops! The page could not be found."
        },
        replace: true
      });
    }
  };

  componentDidMount = () => {
    const { articleID } = this.props;
    this.fetchSingleArticle(articleID);
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { articleID } = this.props;
    if (articleID !== prevProps.articleID) {
      this.fetchSingleArticle(articleID);
    }
  };
}

SingleArticle.propType = {
  articleID: propType.number.isRequired
};
export default SingleArticle;
