import React from "react";
import * as api from "../utils";
import Vote from "./Votes";

class Comments extends React.Component {
  state = {
    comments: []
  };
  render() {
    const { votes } = this.props;
    return (
      <div>
        <h3>Comments: </h3>
        {this.state.comments.map(comment => {
          return (
            <li className="singleComment" key={comment.comment_id}>
              <Vote votes={votes} id={comment.comment_id} section="comments" />
              <div className="innerSingleComment">{comment.body}</div>
            </li>
          );
        })}
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { article_id } = this.props;
    if (article_id !== prevProps.article_id) {
      api.viewComments(article_id).then(comments => {
        this.setState({ comments });
      });
    }
  };
}

export default Comments;
