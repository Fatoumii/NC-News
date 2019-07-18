import React from "react";
import { Link } from "@reach/router";

const Heading = () => {
  return (
    <Link to="/articles" className="heading">
      <h1>NC News</h1>
    </Link>
  );
};

export default Heading;
