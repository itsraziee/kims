import React, { useState, useEffect, useRef } from "react";
import "../styles/DropdownMenu.css";
import { CSSTransition } from "react-transition-group";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownReference = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownReference.current.firstChild.offsetHeight);
  }, []);

  function calculateHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItems(props) {
    return (
      <a
        href="#"
        className="menuItems"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="iconsBtn">{props.leftIcon}</span>
        {props.children}
        <span className="iconsRight">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div
      className="dropdown"
      style={{ height: menuHeight }}
      ref={dropdownReference}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="primary-menu"
        unmountOnExit
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItems leftIcon={<AiIcons.AiFillHome />}>Home</DropdownItems>
          <DropdownItems leftIcon={<IoIcons.IoIosInformationCircle />}>
            About
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiCapitol />}>
            Legislative
          </DropdownItems>
          <DropdownItems
            leftIcon={<AiIcons.AiFillFolder />}
            rightIcon={<FaIcons.FaArrowCircleRight />}
            goToMenu="docServices"
          >
            Document Services
          </DropdownItems>
          <DropdownItems leftIcon={<IoIcons.IoMdHelpCircle />}>
            Blotter
          </DropdownItems>
          <DropdownItems leftIcon={<IoIcons.IoMdHelpCircle />}>
            Summon
          </DropdownItems>
          <DropdownItems leftIcon={<MdIcons.MdDataExploration />}>
            Demographics
          </DropdownItems>
          <DropdownItems leftIcon={<IoIcons.IoIosPeople />}>
            Officials
          </DropdownItems>
          <DropdownItems leftIcon={<RiIcons.RiBuilding2Fill />}>
            List of Purok
          </DropdownItems>
          <DropdownItems leftIcon={<IoIcons.IoIosPerson />}>
            Account
          </DropdownItems>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "docServices"}
        timeout={500}
        classNames="secondary-menu"
        unmountOnExit
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropdownItems
            goToMenu="main"
            leftIcon={<FaIcons.FaArrowCircleLeft />}
          >
            <h2>Document Services</h2>
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiFiles />}>
            Certificate of Residency
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiFiles />}>
            Certificate of Indigency
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiFiles />}>
            Barangay Clearance
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiFiles />}>
            Barangay Certification
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiFiles />}>
            Barangay Birth Certification
          </DropdownItems>
          <DropdownItems leftIcon={<GiIcons.GiFiles />}>
            Barangay Death Certification
          </DropdownItems>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
