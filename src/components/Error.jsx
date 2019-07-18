import React from "react";

const Error = props => {
  console.log(props);
  return (
    <div>
      <p>Error...</p>
      {props.location && props.location.state && props.location.state.message}
    </div>
  );
};

export default Error;
