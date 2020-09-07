import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import { Link } from "react-router-dom";
import "./style.css";

export default function BarbershopCard(props) {
  return (
    <Jumbotron
      className="jumbotron"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')",
        color: "white",
        backgroundSize: "cover",
        textShadow: "1px 1px #000000",
      }}
    >
      <h1 className="bcTitle" style={{ textShadow: "1px 1px #000000" }}>
        {props.title}
      </h1>

      <h4 className="description">
        <i>{props.description}</i>
      </h4>

      <h6>{props.email ? `Email: ${props.email}` : null}</h6>
      <h6>Phone Number: {props.phoneNum}</h6>

      <h6>{props.haircut ? `Haircut: ${props.haircutPrice}€` : null}</h6>
      <h6>{props.beardcut ? `Beard-Shave: ${props.beardcutPrice}€` : null}</h6>
      <h6>{props.combo ? `Combo: ${props.comboPrice}€` : null}</h6>
      <p>
        <Link to={`/barbershops/${props.id}`} className="link-unstyled">
          <Button
            style={{
              backgroundColor: "#495057",
              borderColor: "#fff",
              textShadow: "2px 1px  5px #000000",
            }}
          >
            View Barbershop
          </Button>
        </Link>
      </p>
      <p>
        <a className="link-unstyled" href={props.website} target="_blank">
          <Button
            className="link-unstyled"
            style={{
              backgroundColor: "#495057",
              borderColor: "#fff",
              textShadow: "2px 1px  5px #000000",
            }}
          >
            {props.website}
          </Button>
        </a>
      </p>
      <p>
        <span style={{ fontSize: "2rem" }}>🖤</span>{" "}
        <span style={{ color: "#000000" }}>{props.rate}</span>
      </p>
    </Jumbotron>
  );
}
