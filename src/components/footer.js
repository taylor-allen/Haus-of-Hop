import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Subscribe } from "./subscribe";
import logoWhiteFill from "../images/logoWhiteFill.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Tiktok,
  TwitterX,
  Yelp,
} from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <Container
      fluid
      className="footerContainer"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        color: "#fff",
        textDecoration: "none",
      }}
    >
      <Row className="text-center align-items-center px-4 mt-3">
        <Col lg={true}>
          <Link to={"/"}>
            <Image
              src={logoWhiteFill}
              rounded
              fluid
              style={{ maxWidth: "300px" }}
            />
          </Link>
        </Col>
        <Col lg={true}>
          <Link
            to="/inflatables"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Inflatables
          </Link>
          <Link
            to="/yardgames"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            Yard Games
          </Link>
          <Link
            to="/yardcards"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            Yard Cards
          </Link>
          <Link
            to="/eventsgallery"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            Events Gallery
          </Link>
        </Col>
        <Col lg={true}>
          <Link
            to="/blog"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            Blog
          </Link>
          <Link
            to="/faqs"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            FAQs
          </Link>
          <Link
            to="/contactus"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            Contact Us
          </Link>
          <Link
            to="/privacypolicy"
            style={{ textDecoration: "none", color: "#fff", display: "block" }}
          >
            Privacy Policy
          </Link>
        </Col>
        <Col lg={true}><Subscribe/></Col>
      </Row>
      <Row className="py-5 px-4">
        <Col lg={true}>
          <div style={{ color: "#fff" }}>
            <a
              href="mailto:info@hausofhop.com"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              info@hausofhop.com
            </a>{" "}
            | (850) 417-9373
          </div>
        </Col>
        <Col lg={true}>
          <div className="social-icons d-flex justify-content-evenly">
            <Facebook size={35} />
            <Instagram size={35} />
            <TwitterX size={35} />
            <Tiktok size={35} />
            <Linkedin size={35} />
            <Yelp size={35} />
          </div>
        </Col>
        <Col lg={true}>
          <div className="d-flex justify-content-end" style={{ color: "#fff" }}>
            &copy; 2021 Haus of Hop
          </div>
        </Col>
      </Row>
    </Container>
  );
};
