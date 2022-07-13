import React from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import NavFirst from "./NavFirst";
import NavSecond from "./NavSecond";

const MainpartNav = () => {
  return (
    <div className="header-nav">
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="d-flex justify-content-between "
      >
        <NavFirst></NavFirst>
        <NavSecond></NavSecond>
      </Nav>
    </div>
  );
};

export default MainpartNav;
