import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">AmaderBajar</Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/products">Products</Link>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <Link className="dropdown-item" to="/products/fruits">Fruits</Link>
                            <Link className="dropdown-item" to="/products/vegetable">Vegetable</Link>

                            <NavDropdown.Divider />
                            <Link className="dropdown-item" to="/products">All Products</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/user">User</Link>
                        <Link className="nav-link" to="/Logout">Logout</Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Logout
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;