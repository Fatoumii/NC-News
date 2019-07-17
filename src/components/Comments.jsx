import React from "react";
import * as api from "../utils";
import Vote from "./Votes";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

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
            <div>
              <li className="singleComment" key={comment.comment_id}>
                <Vote
                  votes={votes}
                  id={comment.comment_id}
                  section="comments"
                />
                <div className="innerSingleComment">{comment.body}</div>
              </li>
              <DeleteComment comment_id={comment.comment_id} />
            </div>
          );
        })}
        <AddComment
          article_id={this.props.article_id}
          addNewComment={this.addNewComment}
        />
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
  addNewComment = comment => {
    this.setState(state => {
      return { comments: [comment, ...this.state.comments] };
    });
  };
}

export default Comments;
