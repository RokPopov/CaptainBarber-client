import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <Image
          src="https://image.freepik.com/free-vector/vintage-barber-razor_53876-91215.jpg"
          className="img-thumbnail"
          style={{ width: "15%", borderRadius: "10%" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar navbar-dark" style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Barbershop Details" />
          <NavbarItem path="/" linkText="Barbershops Map" />
          {token && user.isOwner === true ? (
            <NavbarItem path="/startAuction" linkText="Start an Auction" />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
