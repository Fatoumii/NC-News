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
            <h3>{title}</h3>
            <h6>
              Author: <i>{author}</i>
              <br />
              <i>{created_at}</i>
            </h6>
            <p className="singleArticleBody">{body}</p>
            <p>Article votes: {votes}</p>
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
        // state: {
        //   message: "Oops! The page could not be found."
        // },
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
