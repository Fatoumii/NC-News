import React from "react";
import * as api from "../utils";
import Nav from "./Nav";
import TopArticles from "./TopArticles";
import Articles from "./Articles";
import "../content.css";

class SingleArticle extends React.Component {
  state = {
    article: []
  };
  render() {
    const {
      article: { title, body, author, created_at }
    } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <h6 className="author">
          <i>{author}</i>
        </h6>
        <h6 className="date">
          <i>{created_at}</i>
        </h6>
        <p>{body}</p>
      </div>
    );
  }
  componentDidMount = () => {
    const { articleID } = this.props;
    api.singleArticle(articleID).then(article => {
      this.setState({ article });
    });
  };
}
export default SingleArticle;
