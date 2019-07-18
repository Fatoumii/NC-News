import React from "react";
import { Link } from "@reach/router";
import propType from "prop-types";

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

      <select className="dropdown">
        <option value="default">Sort-by:</option>
        <option value="date">Date</option>
        <option value="commentCount">Comment Count</option>
      </select>
    </div>
  );
};
Nav.propType = {
  topics: propType.string.isRequired
};

export default Nav;
