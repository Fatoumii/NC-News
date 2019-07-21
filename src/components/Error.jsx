import React from "react";

const Error = props => {
  return (
    <div>
      <p>Oops! The page could not be found.</p>
      {props.location && props.location.state && props.location.state.message}
    </div>
  );
};

export default Error;
