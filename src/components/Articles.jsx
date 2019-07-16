import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="articles">
        {articles.map(article => {
          return (
            <div key={article.article_id} className="articleCard">
              <Link to={`/articles/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   // const { articles } = this.state; //mounted
  //   const { topics } = this.props;
  //   if (topics !== prevProps.topics) {
  //     this.setState({});
  //   }
  // };

  componentDidMount = () => {
    const { topics } = this.props;
    api.getArticles(topics).then(data => {
      this.setState({ articles: data });
    });
  };
}
export default Articles;
