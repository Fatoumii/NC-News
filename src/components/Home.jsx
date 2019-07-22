import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <section className="homeContent">
      <div className="homepageBox">
        <p className="siteInfo">
          Welcome to NC News, where you can read about the latest trends and
          have your say!
        </p>
        <Link to="/articles">
          <button className="homeButton">Enter</button>
        </Link>
      </div>
    </section>
  );
};
export default Home;
