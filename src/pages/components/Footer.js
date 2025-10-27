// Updated Footer.jsx - More professional
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={6}>
            <h5 className="fw-bold text-gold mb-3">
              Hemnath Crackers Chit Fund
            </h5>
            <p className="mb-0 opacity-75">
              Trusted festive savings for over 10 years. Light up your Diwali
              with confidence.
            </p>
          </Col>
          <Col lg={3}>
            <h6 className="fw-bold text-gold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="fas fa-home me-2"></i>Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-file-alt me-2"></i>Plans
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-download me-2"></i>Download
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h6 className="fw-bold text-gold mb-3">Contact</h6>
            <p className="mb-1">
              <i className="fas fa-phone me-2"></i>+91-XXXXXXXXX
            </p>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i>info@hemnathcrackers.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>Tamilnadu, India
            </p>
          </Col>
        </Row>
        <hr className="my-4 opacity-25" />
        <Row className="text-center">
          <Col>
            <p className="mb-0">
              &copy; 2025 Hemnath Crackers. All rights reserved. | Designed for
              Diwali Joy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
