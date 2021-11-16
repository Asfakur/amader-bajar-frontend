import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = ({ user }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          AmaderBajar
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/dashboard/product/manage">
              Dashboard
            </Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <Link className="dropdown-item" to="/products/fruits">
                Fruits
              </Link>
              <Link className="dropdown-item" to="/products/vegetable">
                Vegetable
              </Link>

              <NavDropdown.Divider />
              <Link className="dropdown-item" to="/products">
                All Products
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            {!user && (
              <React.Fragment>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <Link className="nav-link" to="/userProfile">
                  {user.name}
                </Link>
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
