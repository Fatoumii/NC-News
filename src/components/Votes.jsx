import React, { Component } from "react";
import * as api from "../utils";
import propType from "prop-types";

class Vote extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <p>{votes + voteChange}</p>
        <button
          onClick={() => {
            this.vote(1);
          }}
          disabled={voteChange === 1}
        >
          +
        </button>
        <button
          onClick={() => {
            this.vote(-1);
          }}
          disabled={voteChange === -1}
        >
          -
        </button>
      </div>
    );
  }
  vote = increment => {
    const { id, section } = this.props;
    api
      .votes(id, increment, section)
      .then(response => {})
      .catch(err => {
        this.setState(state => {
          return { voteChange: state.voteChange - increment };
        });
      });

    this.setState(state => {
      return { voteChange: state.voteChange + increment };
    });
  };
}

Vote.propType = {
  votes: propType.number.isRequired
};
export default Vote;
