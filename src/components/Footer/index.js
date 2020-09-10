import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <>
      <Row
        style={{
          backgroundColor: "#495057",
          color: "#fff",
          textShadow: "1px 1px 3px #000000",
        }}
      >
        <Col
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            ©2020
          </p>
          <p>Created as a Portfolio Project by Rok Popov Ledinski</p>
          <p>rokpopov90@gmail.com</p>
        </Col>
      </Row>
      <Row
        className="justify-content-center"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Col
          style={{
            textAlign: "right",
            margin: "2rem",
          }}
        >
          <a
            href="https://www.linkedin.com/in/rok-popov-ledinski-899154199/"
            target="_blank"
            without
            rel="noopener noreferrer"
            style={{
              boxShadow: "0.5rem 2rem 2rem #000000",
            }}
          >
            <img
              src="https://image.flaticon.com/icons/svg/1384/1384088.svg"
              alt="Linked Logo"
              className="img-thumbnail"
              style={{
                width: "4rem",
              }}
            />
          </a>
        </Col>
        <Col
          style={{
            margin: "2rem",
          }}
        >
          <a
            href="https://github.com/RokPopov"
            target="_blank"
            without
            rel="noopener noreferrer"
            style={{
              boxShadow: "0.5rem 2rem 2rem #000000",
            }}
          >
            <img
              src="https://image.flaticon.com/icons/svg/2111/2111612.svg"
              alt="Linked Logo"
              className="img-thumbnail"
              style={{
                width: "4rem",
              }}
            />
          </a>
        </Col>
      </Row>
    </>
  );
}
