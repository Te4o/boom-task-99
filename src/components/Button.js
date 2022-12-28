import React from "react";

function Button(props) {
  return <button type={props.type}>{props.txt}</button>;
}

export default Button;