import React from "react";
import * as api from "../utils";

class Sortby extends React.Component {
  state = {
    articles: [],
    sort_by: "",
    order: ""
  };
  render() {
    console.log(this.state.articles);
    return (
      <div className="dropdown">
        <form onSubmit={this.handleSubmit}>
          <select className="sortby" onChange={this.handleChange}>
            <option>Sort-by:</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </form>
        {/* <form onSubmit={this.handleSubmit}>
          <select className="order" onChange={this.handleChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </form> */}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { topic, sort_by, order } = this.props;
    api.getArticles(topic, sort_by, order).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { topic, sort_by = "created_at", order = "asc" } = this.props;
    const { value } = event.target;
    console.log(value);
    api.getArticles(topic, sort_by, order).then(articles => {
      // if (value === "created_at" && ) {
      // }
    });
  };
}

export default Sortby;
