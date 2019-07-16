import React from "react";
import * as api from "../utils";

class Comments extends React.Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <h3>Comments:</h3>
        {this.state.comments.map(comment => {
          return <li key={comment.comment_id}>{comment.body}</li>;
        })}
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { article_id } = this.props;
    // if (article_id !== prevProps.article_id) {
    api.viewComments(article_id).then(comments => {
      this.setState({ comments });
    });
    // }
  };
}

export default Comments;
