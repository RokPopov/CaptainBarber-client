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
    <Navbar
      bg="dark"
      expand="lg"
      style={{ color: "white", textShadow: "2px 2px 3px #000000" }}
    >
      <Navbar.Brand as={NavLink} to="/" style={{ width: "30%" }}>
        <Image
          src="https://image.freepik.com/free-vector/vintage-barber-razor_53876-91215.jpg"
          alt="Razor Logo"
          className="img-thumbnail"
          style={{ width: "30%", borderRadius: "10%" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          justify
          className="navbar navbar-dark"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          <NavbarItem path="/" linkText="Amsterdam Barbershops" />
          <NavbarItem path="/map" linkText="Barbershops Map" />
          {token && user.isOwner === true ? (
            <NavbarItem path="/addbarbershop" linkText="Add New Barbershop" />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
