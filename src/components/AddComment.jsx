import React, { Component } from "react";

class AddComment extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <section>
        <p>Add Comments</p>
        <form onSubmit={this.handleSubmit} className="form">
          <textarea
            rows="4"
            cols="30"
            placeholder="Leave a comment here..."
            value={this.state.body}
            onChange={this.handleChange}
            id="comment"
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
}

export default AddComment;

// "POST /api/articles/:article_id/comments": {
//   "description": "serves an object of the posted comment for a particular article",
//     "queries": [

//     ],
//       "exampleResponse": {
//     "comment": {
//       "comment_id": 19,
//         "author": "butter_bridge",
//           "article_id": 1,
//             "votes": 0,
//               "created_at": "2019-07-02T08: 24: 32.369Z",
//                 "body": "Great post!"
//     }
//   }
