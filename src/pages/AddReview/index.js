import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { selectBarbershopDetails } from "../../store/barbershopDetail/selectors";

import { postReview } from "../../store/barbershopDetail/actions";

export default function AddReview() {
  const barbershopDetails = useSelector(selectBarbershopDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [content, setContent] = useState("");

  const submitReview = (event) => {
    event.preventDefault();
    dispatch(postReview(content, id));
    setContent("");
  };

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1
          className="mt-5 mb-5"
          style={{
            fontSize: "3rem",
            marginBottom: "2rem",
            borderBottom: "3px solid #fff",
            textShadow: "3px 3px 5px #000000",
          }}
        >
          Add a Review
        </h1>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write a Review</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <Button
            variant="primary"
            type="submit"
            onClick={submitReview}
            style={{
              backgroundColor: "#495057",
              borderColor: "#495057",
              textShadow: "2px 1px  5px #000000",
              marginRight: "10%",
            }}
          >
            Submit Review
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
