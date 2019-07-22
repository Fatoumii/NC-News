import React from "react";
import * as api from "../utils";
import Vote from "./Votes";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";
import propType from "prop-types";

class Comments extends React.Component {
  state = {
    comments: [],
    commentPosted: false,
    deletedComment: false
  };
  render() {
    return (
      <div>
        <h3>Comments:</h3>

        {this.state.commentPosted ? (
          <h4>Comment posted successfully!</h4>
        ) : null}

        {this.state.deletedComment ? (
          <h4>Comment deleted successfully!</h4>
        ) : null}

        <div>
          {this.state.comments.map(comment => {
            return (
              <li className="singleComment" key={comment.comment_id}>
                <Vote
                  votes={comment.votes}
                  id={comment.comment_id}
                  section="comments"
                />
                <div className="innerSingleComment">
                  {comment.body}
                  <br />
                  <br />
                  <i>
                    {comment.author}
                    <br />
                    {comment.created_at}
                  </i>
                </div>
                <DeleteComment
                  comment_id={comment.comment_id}
                  username={comment.author}
                  deleteCommentLive={this.deleteCommentLive}
                />
              </li>
            );
          })}
        </div>
        <AddComment
          article_id={this.props.article_id}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }

  componentDidMount = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(comments => {
      this.setState({ comments });
    });
  };
  addNewComment = comment => {
    this.setState(state => {
      return {
        comments: [comment, ...this.state.comments],
        commentPosted: true
      };
    });
  };
  deleteCommentLive = response => {
    //setting the state back to the original comments - excludes the one  deleted
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(comments => this.setState({ comments, deletedComment: true }));
  };
}

Comments.propType = {
  article_id: propType.number.isRequired
};

export default Comments;
