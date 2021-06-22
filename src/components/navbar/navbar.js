import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNav = (props) => {
    return (
        <header>
            <h1>TJ Courey</h1>
                <Navbar bg="dark" variant="dark" className="flex">
                  <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                   <Nav className="justify-content-end">
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#bio">Bio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                   </Nav>
                </Navbar>   
        </header>
    )
}

export default MyNav
