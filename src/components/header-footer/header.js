import React from "react";
import "./header.module.css";
import { Container } from "react-bootstrap";
function Header() {
  return (
    <header>
      <Container xs={12}>
        <h2 style={{ textAlign: "end", marginRight: "2rem" }}>TJ Courey</h2>
        <h4 style={{ textAlign: "end", marginRight: "1rem" }}>
          Full-Stack Software Engineer
        </h4>
      </Container>
    </header>
  );
}

export default Header;
