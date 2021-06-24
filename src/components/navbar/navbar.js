import React from "react";
import classes from "./navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Resume from "../../images/Resume.pdf";

const MyNav = ({ currentPage, handlePageChange }) => {
  return (
    <Navbar bg="dark" variant="dark" className="flex">
      <Navbar.Brand href="#home" onClick={() => handlePageChange("Home")}>
        Portfolio
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link
          href="#projects"
          onClick={() => handlePageChange("Portfolio")}
        >
          Projects
        </Nav.Link>
        <Nav.Link href="#bio" onClick={() => handlePageChange("Bio")}>
          Bio
        </Nav.Link>
        <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </Nav.Link>
        <Nav.Link href={Resume} target="_blank">
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
