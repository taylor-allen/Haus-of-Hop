import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-none navbar-center" sticky="top">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Link to="/">
          <Navbar.Brand href="#" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="navBar m-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* Navbar Drop Down for Inflatables */}
            <NavDropdown title={<span style={{ color: '#327774' }}>Inflatables</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/inflatables">
                All Inflatables
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/drybouncehouses">
                Dry Bounce Houses
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/combos">
                Wet Combos/Water Slides
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/packages">
                Packages
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/orderbydate">
                Order By Date
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/holidayrates">
                Holiday Rates
              </NavDropdown.Item>
            </NavDropdown>
            <div className="vr"></div>
            <Nav.Link as={Link} to="/dunktanks" style={{ color: '#327774' }}>Dunk Tanks</Nav.Link>
            <div className="vr"></div>
            {/* Navbar Drop Down for Party Extras */}
            <NavDropdown title={<span style={{ color: '#327774' }}>Party Extras</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/yardgames">
                Yard Games
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/misc">
                Tables, Chairs, & Power
              </NavDropdown.Item>
            </NavDropdown>
            <div className="vr"></div>
            <Nav.Link as={Link} to="/yardcards" style={{ color: '#327774' }}>Yard Cards</Nav.Link>
            <div className="vr"></div>
            {/* Navbar Drop Down for More */}
            <NavDropdown title={<span style={{ color: '#327774' }}>More</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/customergallery">
                Customer Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/eventsgallery">Events Gallery</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About...</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reviews">Reviews</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contactus">Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/privacypolicy">
                Privacy Policy
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
