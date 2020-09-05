import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

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

  const review =
    locations &&
    locations.map((loc, i) => {
      return loc.reviews
        .map((review, i) => {
          return (
            <Card
              style={{
                backgroundColor: "#495057",
                textShadow: "3px 3px 5px #000000",
                color: "#fff",
              }}
            >
              <Card.Header
                key={i}
                style={{
                  border: "none",
                }}
              >
                User <i>{review.userId}</i> wrote: <i>{review.content}</i>
              </Card.Header>

              <Card.Footer
                key={i}
                style={{
                  border: "none",
                }}
              >
                Posted at: <i>{review.time}</i>
              </Card.Footer>
            </Card>
          );
        })
        .sort((rev1, rev2) => rev2.time - rev1.time);
    });

  console.log("reviews", review);

  const likeBarbershop = () => {
    dispatch(incrementLikes(id));
  };

  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url('${barbershopDetails.image}')`,
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "2rem",
              borderBottom: "3px solid #fff",
              boxShadow: "2rem 2rem 5rem #000000",
              textShadow: "3px 3px 5px #000000",
              color: "#fff",
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
                  backgroundColor: "#495057",
                  color: "white",
                }}
              >
                <h5
                  style={{
                    textShadow: "2px 1px  5px #000000",
                  }}
                >
                  Contact information
                </h5>
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
                  backgroundColor: "#495057",
                  color: "white",
                }}
              >
                <h5
                  style={{
                    textShadow: "2px 1px  5px #000000",
                  }}
                >
                  Services provided
                </h5>
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
                  backgroundColor: "#495057",
                  color: "white",
                }}
              >
                <h5
                  style={{
                    textShadow: "2px 1px  5px #000000",
                  }}
                >
                  Opening Hours
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>{barbershopDetails.openingHours}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Card style={{ marginTop: "1rem" }}>
          <Card.Body
            style={{
              backgroundColor: "#495057",
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
          </Card.Body>
        </Card>
      </Jumbotron>
      <Jumbotron
        style={{
          backgroundColor: "#495057",

          textAlign: "center",
        }}
      >
        <h1
          style={{
            textShadow: "2px 1px  5px #000000",
            marginBottom: "3rem",
            color: "#fff",
          }}
        >
          Reviews Section
        </h1>
        {review}
        {/* <h4
          style={{
            textShadow: "1px 1px #000000",
            color: "#fff",
            marginBottom: "3rem",
          }}
        >
          {" "}
          Add a review
        </h4> */}
        <h4
          style={{
            textShadow: "2px 1px  5px #000000",
            color: "#fff",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          {" "}
          Add a like
          <p>
            <Button
              style={{
                backgroundColor: "#495057",
                borderColor: "#495057",
                textShadow: "2px 1px  5px #000000",
              }}
              onClick={likeBarbershop}
            >
              <span style={{ fontSize: "2rem" }}>🤍</span>{" "}
            </Button>
            <p
              style={{
                color: "white",
              }}
            >
              {barbershopDetails.rate}
            </p>
          </p>
        </h4>
      </Jumbotron>
    </>
  );
}
