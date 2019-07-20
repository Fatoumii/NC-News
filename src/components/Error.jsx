import React from "react";

const Error = props => {
  return (
    <div>
      {props.location && props.location.state && props.location.state.message}
    </div>
  );
};

export default Error;
