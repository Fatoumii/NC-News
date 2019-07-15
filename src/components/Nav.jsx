import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { topics } = props;
  return (
    <div className="nav">
      {topics.map(({ slug }) => {
        return (
          <Link to={`/topics/${slug}`} key={slug}>
            {slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
