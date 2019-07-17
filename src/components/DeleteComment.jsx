import React from "react";
import * as api from "../utils";

class DeleteComment extends React.Component {
  render() {
    return <button onClick={this.deleteComment}>DELETE COMMENT</button>;
  }
  deleteComment = () => {
    const { comment_id } = this.props;
    api.delComment(comment_id).then(response => {
      console.log(response, "response");
    });
    // const { comment_id } = this.props;
    // api.delComment(comment_id);
    // this.setState(state => {
    //   return {
    //     comment: ""
    //   };
    // });
  };
}
export default DeleteComment;

//deletes for 'jessjelly'
