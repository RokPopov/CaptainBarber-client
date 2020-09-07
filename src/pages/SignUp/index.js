import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [isOwner, setOwner] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      signUp(email, password, firstName, lastName, address, phoneNum, isOwner)
    );

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNum("");
    setOwner(false);
  }

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
          Sign Up
        </h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>First Name</h6>
          </Form.Label>
          <Form.Control
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            type="text"
            placeholder="Enter First Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>Last Name</h6>
          </Form.Label>
          <Form.Control
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            type="text"
            placeholder="Enter Last Name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>Address</h6>
          </Form.Label>
          <Form.Control
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            type="text"
            placeholder="Enter Address"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>Phone Number</h6>
          </Form.Label>
          <Form.Control
            value={phoneNum}
            onChange={(event) => setPhoneNum(event.target.value)}
            type="text"
            placeholder="Enter Phone Number (not necessary)"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>Email</h6>
          </Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter Email"
            required
          />
          <Form.Text className="text-muted">
            You're email is safe with us.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>Password</h6>
          </Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicIsOwner">
          <input
            checked={isOwner}
            onChange={(event) => setOwner(event.target.checked)}
            type="checkbox"
            placeholder="Barbershop Owner?"
            required
          />{" "}
          <Form.Label>
            <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
              I am a barbershop owner
            </h6>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={submitForm}
            style={{
              backgroundColor: "#495057",
              borderColor: "#495057",
              textShadow: "2px 1px  5px #000000",
              marginRight: "10%",
            }}
          >
            Sign Up
          </Button>
          <Button
            href="/login"
            style={{
              backgroundColor: "#495057",
              borderColor: "#495057",
              textShadow: "2px 1px  5px #000000",
              marginRight: "10%",
            }}
          >
            Log In
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
