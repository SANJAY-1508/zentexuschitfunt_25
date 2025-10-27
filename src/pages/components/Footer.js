import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Left: Logo */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <Image
              src={require("../../assets/logo.png")}
              alt="Gopuram Finance Logo"
              fluid
              style={{ maxHeight: "150px" }}
            />
          </Col>

          {/* Right: Heading + Address + Phone */}
          <Col md={6} className=""></Col>
        </Row>

        <hr className="bg-light mt-3" />

        <Row>
          <Col className="text-center"></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
