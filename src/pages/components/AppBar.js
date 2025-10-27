import React from "react";
import { Container, Row, Col, Card, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const AppBar = () => {
  return (
    <div className="mark-bg">
      <Container fluid>
        <Row className="align-items-center">
          <Col
            xs={12}
            sm={12}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2 mb-lg-0"
          >
            <img
              src={require("../../assets/logo.png")}
              className="img-fluid logo-img"
              alt="Logo"
            />
          </Col>

          {/* Heading */}
          <Col xs={12} sm={12} lg={6} className="text-center my-2 my-lg-0">
            <h4 className="appbar-title">Hemnath Crackers Chit Fund</h4>
          </Col>

          {/* Gold Card */}
          <Col
            xs={12}
            sm={12}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-end gap-2 flex-wrap"
          >
            <button className="btn btn-success">Download APk</button>
          </Col>
        </Row>
      </Container>

      {/* Bottom Container: NavLinks */}
      <Container fluid className="nav-container py-1">
        <Row>
          <Col xs={12} className="text-center">
            <Marquee>welcome To Hemnath Crackers Chit Fund</Marquee>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppBar;
