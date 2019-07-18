import React from "react";
import { Link } from "@reach/router";
const Home = () => {
  return (
    <div className="content">
      <Link to="/articles">
        <button>Enter</button>
      </Link>
    </div>
  );
};
export default Home;
