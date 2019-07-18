import React from "react";
import { Link } from "@reach/router";
import propType from "prop-types";
import Sortby from "./Sortby";

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
      <Sortby topics={topics} />
    </div>
  );
};
Nav.propType = {
  topics: propType.string.isRequired
};

export default Nav;
