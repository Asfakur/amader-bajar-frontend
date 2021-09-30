import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import React from 'react';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AmaderBajar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Products</Nav.Link>
                            <Nav.Link href="#pricing">Dashboard</Nav.Link>
                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Raw Products</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Fruits</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vegetables</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">All Products</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Image</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;