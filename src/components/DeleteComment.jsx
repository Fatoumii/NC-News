import React from "react";
import * as api from "../utils";
import propType from "prop-types";

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
DeleteComment.propType = {
  comment_id: propType.number.isRequired,
  deleteCommentLive: propType.func.isRequired
};
export default DeleteComment;
