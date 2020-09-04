import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { fetchBarbershopDetails } from "../../store/barbershopDetail/actions";
import { incrementLikes } from "../../store/barbershopDetail/actions";

import { selectBarbershopDetails } from "../../store/barbershopDetail/selectors";

export default function BarbershopDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const barbershopDetails = useSelector(selectBarbershopDetails);

  useEffect(() => {
    if (id !== "0") {
      dispatch(fetchBarbershopDetails(id));
    }
  }, [dispatch, id]);

  const { locations } = barbershopDetails;
  console.log(locations, "locations");
  const address =
    locations &&
    locations.map((loc, i) => {
      return <ListGroup.Item key={i}>{loc.address}</ListGroup.Item>;
    });

  const likeBarbershop = () => {
    dispatch(incrementLikes(id));
  };

  return (
    <Jumbotron
      style={{
        backgroundColor: "grey",
        backgroundImage: "linear-gradient(#ADA996, #FFFFFF)",
      }}
    >
      <div>
        <h1
          className="bTitle"
          style={{
            marginBottom: "2rem",
            borderBottom: "3px solid black",
          }}
        >
          {barbershopDetails.title}
        </h1>
      </div>
      <Row>
        <Col variant="flush">
          <ListGroup>
            <ListGroup.Item
              style={{
                backgroundColor: "#666666",
                color: "white",
              }}
            >
              <h5>Contact information</h5>
            </ListGroup.Item>
            {address}
            <ListGroup.Item>{barbershopDetails.phoneNum}</ListGroup.Item>
            <ListGroup.Item>
              {barbershopDetails.email ? (
                barbershopDetails.email
              ) : (
                <i>No email provided</i>
              )}
            </ListGroup.Item>
            <ListGroup.Item>{barbershopDetails.website}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col variant="flush">
          <ListGroup>
            <ListGroup.Item
              style={{
                backgroundColor: "#666666",
                color: "white",
              }}
            >
              <h5>Services provided</h5>
            </ListGroup.Item>
            {barbershopDetails.haircut ? (
              <ListGroup.Item>
                Haircut: {barbershopDetails.haircutPrice} €
              </ListGroup.Item>
            ) : null}
            {barbershopDetails.beardcut ? (
              <ListGroup.Item>
                Beard Shave: {barbershopDetails.beardcutPrice} €
              </ListGroup.Item>
            ) : null}
            {barbershopDetails.combo ? (
              <ListGroup.Item>
                Combo: {barbershopDetails.comboPrice} €
              </ListGroup.Item>
            ) : null}
          </ListGroup>
        </Col>
        <Col variant="flush">
          <ListGroup>
            <ListGroup.Item
              style={{
                backgroundColor: "#666666",
                color: "white",
              }}
            >
              <h5>Opening Hours</h5>
            </ListGroup.Item>
            <ListGroup.Item>{barbershopDetails.openingHours}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Card style={{ marginTop: "1rem" }}>
        <Card.Body
          style={{
            backgroundColor: "#666666",
            color: "white",
          }}
        >
          <i
            style={{
              fontSize: "1.5rem",
            }}
          >
            {barbershopDetails.description}
          </i>
          <p>
            <Button
              style={{
                backgroundColor: "#666666",
                borderColor: "#666666",
              }}
              onClick={likeBarbershop}
            >
              <span style={{ fontSize: "2rem" }}>🤍</span>{" "}
            </Button>
            {barbershopDetails.rate}
          </p>
        </Card.Body>
      </Card>
    </Jumbotron>
  );
}
