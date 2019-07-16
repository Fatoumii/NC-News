import React from "react";
import * as api from "../utils";

class SingleArticle extends React.Component {
  state = {
    article: {}
  };
  render() {
    console.log(this.props);
    const {
      article: { title, body, author, created_at }
    } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <h6>{author}</h6>
        <h6>{created_at}</h6>
        <p>{body}</p>
      </div>
    );
  }
  componentDidMount = () => {
    const { articleID } = this.props;
    console.log(this.props.articleID);
    api.singleArticle(articleID).then(article => {
      this.setState({ article });
    });
  };
}
export default SingleArticle;
