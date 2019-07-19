import React, { Component } from "react";
import * as api from "../utils";
import propType from "prop-types";

class AddComment extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit} className="form">
          <p>Add comment:</p>
          <label>
            <textarea
              rows="4"
              cols="30"
              placeholder="Leave a comment here..."
              value={this.state.body}
              onChange={this.handleChange}
            />
          </label>
          <button
            className="submit"
            type="submit"
            disabled={this.state.body.length === 0}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ body: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { body } = this.state;

    api.postComment(body, article_id).then(comment => {
      this.props.addNewComment(comment);
      this.setState({ body: "" });
    });
  };
}
AddComment.propType = {
  article_id: propType.number.isRequired
};

export default AddComment;
