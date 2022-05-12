import React from "react";
import "./App.css";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import NavbarItems from "./components/NavbarItems.js";
import NavigationBar from "./components/NavigationBar.js";
import DropdownMenu from "./components/DropdownMenu.js";

function App() {
  return (
    <NavigationBar>
      <NavbarItems icon={<FaIcons.FaSearch />} />
      <NavbarItems icon={<FaIcons.FaBell />} />
      <NavbarItems icon={<FiIcons.FiMenu />}>
        <DropdownMenu></DropdownMenu>
      </NavbarItems>
    </NavigationBar>
  );
}

export default App;
