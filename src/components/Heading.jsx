import React from "react";
import { Link } from "@reach/router";

const Heading = () => {
  return (
    <Link to="/articles">
      <h1 className="heading">NC News</h1>
    </Link>
  );
};

export default Heading;
