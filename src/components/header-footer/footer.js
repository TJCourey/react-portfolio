import React from "react";
import "./footer.module.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Email from "../../images/email.png";

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
            <a href="mailto:tjcourey84@gmail.com">
              <img style={{ maxHeight: "2rem" }} src={Email} />
            </a>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <a href="https://www.linkedin.com/in/tj-courey-8817b1208/">
              <img style={{ maxHeight: "2rem" }} src={Linkedin} />
            </a>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <a href="https://github.com/TJCourey">
              <img style={{ maxHeight: "2rem" }} src={Github} />
            </a>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
