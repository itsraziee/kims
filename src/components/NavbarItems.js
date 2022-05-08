import React, { useState } from "react";
import "../styles/NavbarItems.css";

function NavbarItems(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="navbar-items">
      <a href="#" className="iconsBtn" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default NavbarItems;
