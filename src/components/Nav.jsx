import React from "react";
import { Link } from "@reach/router";
import propType from "prop-types";

const Nav = props => {
  const { topics } = props;
  return (
    <div className="nav">
      {topics.map(({ slug }) => {
        return (
          <h4>
            {" "}
            <Link
              to={`/topics/${slug}`}
              key={slug}
              data-cy={slug}
              className="navLinks"
            >
              {slug}
            </Link>{" "}
          </h4>
        );
      })}
    </div>
  );
};
Nav.propType = {
  topics: propType.string.isRequired
};

export default Nav;
