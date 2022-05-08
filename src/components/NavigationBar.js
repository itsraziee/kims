import React, { useState } from "react";
import "../styles/NavigationBar.css";

function NavigationBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbarChild">{props.children}</ul>
    </nav>
  );
}

export default NavigationBar;
