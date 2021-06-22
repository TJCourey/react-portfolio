import React from "react";
import classes from "./navbar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNav = ({ currentPage, handlePageChange }) => {
  return (
    <header className={classes.navbar}>
      <h1>TJ Courey</h1>
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
          <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default MyNav;
