import React from "react";
import * as api from "../utils";
import "../content.css";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Vote from "./Votes";

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
            <h6 className="author">
              <i>{author}</i>
            </h6>
            <h6 className="date">
              <i>{created_at}</i>
            </h6>
            <p>{body}</p>
            <p>Article votes: {votes}</p>
            <br />
            <Comments article_id={article_id} />
          </div>
        )}
        <div className="addComment" />
      </section>
    );
  }
  componentDidMount = () => {
    const { articleID } = this.props;
    api.singleArticle(articleID).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
}
export default SingleArticle;
