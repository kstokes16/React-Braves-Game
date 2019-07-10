import React from "react";
import "./style.css";

function Container(props) {
  return (
  <div id="top-navigation-bar">
  <div className="container" id="top-nav-bar">{props.children}</div>
  </div>
  )
}

export default Container;
