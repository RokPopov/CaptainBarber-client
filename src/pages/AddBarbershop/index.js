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
  const { token } = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [haircut, setHaircut] = useState(false);
  const [haircutPrice, setHaircutPrice] = useState(0);
  const [beardcut, setBeardcut] = useState(false);
  const [beardcutPrice, setBeardcutPrice] = useState(0);
  const [combo, setCombo] = useState(false);
  const [comboPrice, setComboPrice] = useState(0);
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
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
        image,
        address,
        longitude,
        latitude
      )
    );
    setTitle("");
    setHaircut(false);
    setHaircutPrice("");
    setBeardcutPrice("");
    setBeardcut(false);
    setComboPrice("");
    setCombo(false);
    setWebsite("");
    setEmail("");
    setPhoneNum("");
    setOpeningHours("");
    setDescription("");
    setImage("");
    setAddress("");
    setLongitude(0);
    setLatitude(0);
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
              <h3
                style={{
                  marginBottom: "2rem",

                  textAlign: "center",
                }}
              >
                Fill in all the required fields in order to create a new
                barbershop
              </h3>
              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Label>
                  <h5>Barbershop Title</h5>
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
                  checked={haircut}
                  onChange={(event) => {
                    setHaircut(event.target.checked);
                  }}
                  type="checkbox"
                  placeholder="Offer haircuts?"
                  required
                />{" "}
                <Form.Label>
                  <h5>I offer haircut service</h5>
                </Form.Label>
              </Form.Group>

              <Form.Group
                style={{
                  textAlign: "center",
                }}
              >
                <Form.Label>
                  <h5>Price of haircut</h5>
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
                  checked={beardcut}
                  onChange={(event) => setBeardcut(event.target.checked)}
                  type="checkbox"
                  placeholder="Offer beard shave?"
                  required
                />{" "}
                <Form.Label>
                  <h5>I offer beard shave</h5>
                </Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Price of beard shave</h5>
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
                  checked={combo}
                  onChange={(event) => setCombo(event.target.checked)}
                  type="checkbox"
                  placeholder="Offer combo service?"
                  required
                />{" "}
                <Form.Label>
                  <h5>I offer haircut and beard shave</h5>
                </Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Price of combo service</h5>
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
                  <h5>Barbershop Address</h5>
                </Form.Label>
                <Form.Control
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  type="text"
                  placeholder="Naritaweg 10, 1043BX Amsterdam"
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Longitude</h5>
                </Form.Label>
                <Form.Control
                  value={longitude}
                  onChange={(event) => setLongitude(event.target.value)}
                  type="number"
                  step="any"
                  placeholder="52.379189"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Latitude</h5>
                </Form.Label>
                <Form.Control
                  value={latitude}
                  onChange={(event) => setLatitude(event.target.value)}
                  type="number"
                  step="any"
                  placeholder="4.899431"
                  required
                  style={{
                    textAlign: "center",
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  <h5>Barbershop Website</h5>
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
                  <h5>Barbershop Email</h5>
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
                  <h5>Barbershop Phone Number</h5>
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
                  <h5>Barbershop Opening Hours</h5>
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
                  <h5>Barbershop Description</h5>
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
                  <h5>Image</h5>
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
