import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.module.css";
import Resume from "../../images/Resume.pdf";
import { Container } from "react-bootstrap";

const MyNav = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar bg="dark" variant="dark" className="flex">
      <Container fluid>
        <Navbar.Brand
          className="Col xs-2"
          href="#home"
          onClick={() => handlePageChange("Home")}
        >
          Portfolio
        </Navbar.Brand>
        <Nav className="Col">
          <Nav.Link
            className="Col-2"
            href="#projects"
            onClick={() => handlePageChange("Portfolio")}
          >
            Projects
          </Nav.Link>
          <Nav.Link className="Col-2" href={Resume} target="_blank">
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
