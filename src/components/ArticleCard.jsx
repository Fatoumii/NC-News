import React, { Component } from "react";

class ArticleCard extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.map(article => {
          return (
            <div key={article.article_id} className="articleCard">
              <h4>{article.title}</h4>
              {/* <p>{article.body}</p> */}
            </div>
          );
        })}
      </div>
    );
  }
}
export default ArticleCard;
