import React from "react";
import * as api from "../utils";

class DeleteComment extends React.Component {
  render() {
    return <button onClick={this.deleteComment}>DELETE COMMENT</button>;
  }
  deleteComment = () => {
    const { comment_id, deleteCommentLive } = this.props;
    api.delComment(comment_id).then(response => {
      deleteCommentLive(response);
    });
  };
}
export default DeleteComment;

//deletes for 'jessjelly'
