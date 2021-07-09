import React from "react";
import "./footer.module.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container
        style={{ height: "3rem", background: "grey" }}
        fluid
        className="fixed-bottom"
      >
        <Row>
          <Col></Col>
          <Col style={{ textAlign: "center" }}>
            <a href="mailto:tjcourey84@gmail.com">TJCourey84@Gmail.com</a>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <a href="https://www.linkedin.com/in/tj-courey-8817b1208/">
              LinkedIn{" "}
            </a>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <a href="https://github.com/TJCourey">GitHub</a>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
