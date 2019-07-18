import React from "react";
import * as api from "../utils";

class Sortby extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at"
  };
  render() {
    return (
      <div className="dropdown">
        <form onSubmit={this.handleSubmit}>
          <select className="sortby" onChange={this.handleChange}>
            <option>Sort-by:</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { topic, sort_by } = this.props;
    api.getArticles(topic, sort_by).then(articles => {
      console.log(articles);
    });
    // const { topic, sort_by } = this.props;
    // const { value } = event.target;
    // api.getArticles(topic, sort_by).then(articles => {
    //   console.log(value);
    //   return articles.map(article => console.log(article));
    // });
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ sort_by: event.target.value });
  };
}

export default Sortby;
