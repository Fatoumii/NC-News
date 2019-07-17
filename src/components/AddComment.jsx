import React, { Component } from "react";
import * as api from "../utils";
import { navigate } from "@reach/router";

class AddComment extends Component {
  state = {
    body: "",
    author: "butterbridge",
    article_id: this.props.article_id
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
          <button className="submit" type="submit">
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

    let comment = { body: "", author: "", article_id: 0, votes: 0 };
    api.postComment(comment, article_id).then(comment => {
      console.log(comment, "comment");
      // navigate(`/articles/${article_id}`, { state: { postSuccessful: true } });
    });
    //.catch()
  };

  componentWillUpdate = () => {};
}

export default AddComment;
