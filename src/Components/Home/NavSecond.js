import React from "react";
import { Dropdown } from "react-bootstrap";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

const NavSecond = () => {
  return (
    <div>
      <div className="d-flex">
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Write a post</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Write a post Here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={NavItem} className=" m-margin-none d-lg-block ">
          <Dropdown.Toggle as={NavLink}>Write a post</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Write a post Here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavSecond;
