import React from "react";
import { Nav } from "react-bootstrap";

const NavFirst = () => {
  return (
    <div>
      <div className="d-flex">
        <Nav.Item>
          <Nav.Link href="/home">All Posts(32)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Article</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Event</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Job</Nav.Link>
        </Nav.Item>{" "}
      </div>
    </div>
  );
};

export default NavFirst;
