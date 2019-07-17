import React from "react";
import { Link } from "@reach/router";

const Nav = props => {
  const { topics } = props;
  return (
    <div className="nav">
      {topics.map(({ slug }) => {
        return (
          <Link to={`/topics/${slug}`} key={slug} className="navLinks">
            {slug}
          </Link>
        );
      })}

      {/* <p className="sortby">Sort by:</p> */}
      <select className="dropdown">
        <option value="default" />
        <option value="date">Date</option>
        <option value="commentCount">Comment Count</option>
      </select>
    </div>
  );
};

export default Nav;
