import React from "react";

const Error = props => {
  return (
    <div className="errorContent">
      <p className="errorText">
        ⚠️ Whoops! Looks like the page doesn't exist ⚠️
      </p>
      {props.location && props.location.state && props.location.state.message}
    </div>
  );
};

export default Error;
