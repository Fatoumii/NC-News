import React from "react";
import * as api from "../utils";
import propType from "prop-types";

class DeleteComment extends React.Component {
  render() {
    return (
      <div>
        {this.props.username === "jessjelly" ? (
          <button className="deleteButton" onClick={this.deleteComment}>
            DELETE
          </button>
        ) : null}
      </div>
    );
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
  username: propType.string.isRequired,
  deleteCommentLive: propType.func.isRequired
};
export default DeleteComment;
