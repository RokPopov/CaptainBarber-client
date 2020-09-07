import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import { selectUser } from "../../store/user/selectors";
import { addBarbershop } from "../../store/user/actions";

export default function AddBarbershop() {
  const { token, id } = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [haircut, setHaircut] = useState(false);
  const [haircutPrice, setHaircutPrice] = useState(0);
  const [beardcut, setBeardcut] = useState(false);
  const [beardcutPrice, setBeardcutPrice] = useState(0);
  const [combo, setCombo] = useState(false);
  const [comboPrice, setComboPrice] = useState(0);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      addBarbershop(
        title,
        haircut,
        beardcut,
        combo,
        haircutPrice,
        beardcutPrice,
        comboPrice,
        website,
        email,
        phoneNum,
        openingHours,
        description,
        image
      )
    );
    setTitle("");
    setHaircut("");
    setHaircutPrice("");
    setBeardcutPrice("");
    setComboPrice("");
    setWebsite("");
    setEmail("");
    setPhoneNum("");
    setOpeningHours("");
    setDescription("");
    setImage("");
  }

  if (token === null) {
    history.push("/");
  }

  return (
    <div>
      <>
        <Jumbotron>
          <h1
            className="mt-5 mb-5"
            style={{
              fontSize: "3rem",
              marginBottom: "2rem",
              textShadow: "3px 3px 5px #000000",
              textAlign: "center",
            }}
          >
            Add a Barbershop
          </h1>

          <Container
            style={{
              textAlign: "center",
            }}
          >
            <Form
              as={Col}
              md={{ span: 6, offset: 3 }}
              className="mt-5"
              style={{
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  marginBottom: "2rem",
                  textShadow: "3px 3px 5px #000000",
                  textAlign: "center",
                }}
              >
                Fill in all the required fields in order to create a new
                barbershop
              </h4>
              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Barbershop Title
                  </h6>
                </Form.Label>
                <Form.Control
                  style={{
                    textAlign: "center",
                  }}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="Enter title"
                  required
                />
              </Form.Group>

              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <input
                  value={!haircut}
                  onChange={(event) => setHaircut(event.target.value)}
                  type="checkbox"
                  placeholder="Offer haircuts?"
                  required
                />{" "}
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    I offer haircut service
                  </h6>
                </Form.Label>
              </Form.Group>

              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Price of haircut
                  </h6>
                </Form.Label>
                <Form.Control
                  value={haircutPrice}
                  onChange={(event) => setHaircutPrice(event.target.value)}
                  type="number"
                  placeholder="Your price of haircut, enter a number"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicBeardcut">
                <input
                  value={!beardcut}
                  onChange={(event) => setBeardcut(event.target.value)}
                  type="checkbox"
                  placeholder="Offer beard shave?"
                  required
                />{" "}
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    I offer beard shave
                  </h6>
                </Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Price of beard shave
                  </h6>
                </Form.Label>
                <Form.Control
                  value={beardcutPrice}
                  onChange={(event) => setBeardcutPrice(event.target.value)}
                  type="number"
                  placeholder="Your price of beard shave, enter a number"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCombo">
                <input
                  value={!combo}
                  onChange={(event) => setCombo(event.target.value)}
                  type="checkbox"
                  placeholder="Offer combo service?"
                  required
                />{" "}
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    I offer haircut and beard shave
                  </h6>
                </Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Price of combo service
                  </h6>
                </Form.Label>
                <Form.Control
                  value={comboPrice}
                  onChange={(event) => setComboPrice(event.target.value)}
                  type="number"
                  placeholder="Your price of combo service, enter a number"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Barbershop Website
                  </h6>
                </Form.Label>
                <Form.Control
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  type="text"
                  placeholder="https://"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Barbershop Email
                  </h6>
                </Form.Label>
                <Form.Control
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="info@captainbarber.com"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Barbershop Phone Number
                  </h6>
                </Form.Label>
                <Form.Control
                  value={phoneNum}
                  onChange={(event) => setPhoneNum(event.target.value)}
                  type="text"
                  placeholder="+31-55-555-5555"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Barbershop Opening Hours
                  </h6>
                </Form.Label>
                <Form.Control
                  value={openingHours}
                  onChange={(event) => setOpeningHours(event.target.value)}
                  type="text"
                  placeholder="MON-SAT 8-22, SUN Closed"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>
                    Barbershop Description
                  </h6>
                </Form.Label>
                <Form.Control
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  type="text"
                  placeholder="Enter description"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h6 style={{ textShadow: "3px 3px 5px #000000" }}>Image</h6>
                </Form.Label>
                <Form.Control
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  type="text"
                  placeholder="https://"
                  style={{
                    textAlign: "center",
                  }}
                />
                {image ? <Image src={image} alt="preview" thumbnail /> : null}
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
                  }}
                >
                  Add Barbershop
                </Button>
              </Form.Group>
            </Form>
          </Container>
        </Jumbotron>
      </>
    </div>
  );
}
