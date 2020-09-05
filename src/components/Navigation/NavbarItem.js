import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export default function NavbarItem(props) {
  return (
    <Nav.Item>
      <Nav.Link
        as={NavLink}
        to={props.path}
        style={{ color: "white", textShadow: "2px 2px 3px #000000" }}
      >
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  );
}
