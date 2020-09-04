import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "./style.css";

export default function BarbershopCard(props) {
  return (
    <Jumbotron
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1547997825-ac153dc46a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
        color: "white",
        backgroundSize: "100%",
      }}
    >
      <h1 className="shadow-box-example z-depth-5" style={{ color: "black" }}>
        {props.title}
      </h1>
      <h3>{props.description}</h3>

      <h6>Email: {props.email}</h6>
      <h6>Phone Number: {props.phoneNum}</h6>

      <h6>{props.haircut ? `Haircut price: ${props.haircutPrice}€` : null}</h6>
      <h6>
        {props.beardcut ? `Beard shave price: ${props.beardcutPrice}€` : null}
      </h6>
      <h6>{props.combo ? `Combo price: ${props.comboPrice}€` : null}</h6>
      <p>
        <Link to={`/barbershops/${props.id}`} className="link-unstyled">
          <Button
            style={{
              backgroundColor: "#666666",
              borderColor: "#666666",
            }}
          >
            View Barbershop
          </Button>
        </Link>
      </p>
      <p>
        <a className="link-unstyled" href={props.website}>
          <Button
            className="link-unstyled"
            style={{
              backgroundColor: "#666666",
              borderColor: "#666666",
            }}
          >
            {props.website}
          </Button>
        </a>
      </p>
    </Jumbotron>
  );
}
