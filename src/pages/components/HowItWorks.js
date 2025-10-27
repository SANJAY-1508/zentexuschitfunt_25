import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const HowItWorks = ({ title = "How this works", steps = [] }) => {
  return (
    <section className="how-section">
      <Container fluid className="p-0">
        <Row>
          <Col xs={12}>
            <div className="chithead text-center mb-5">
              <h1 className="howh1">
                <span>{title}</span>
              </h1>
            </div>
            <div className="how-timeline">
              {/* Vertical line */}
              <div className="timeline-line"></div>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`how-step ${
                    index % 2 === 0 ? "even-step" : "odd-step"
                  }`}
                >
                  <Row className="align-items-center position-relative">
                    {/* Step number circle */}
                    <Col xs={12} className="text-center mb-3">
                      <div className="step-number">
                        <span>{step.stepNumber}</span>
                      </div>
                    </Col>
                    {/* Content */}
                    <Col
                      md={6}
                      className={`step-content ${
                        index % 2 === 0 ? "order-md-2" : "order-md-1"
                      }`}
                    >
                      <div className="step-text">
                        <h3 className="step-head">{step.heading}</h3>
                        <p className="step-p">{step.description}</p>
                      </div>
                    </Col>
                    <Col
                      md={6}
                      className={`${
                        index % 2 === 0 ? "order-md-1" : "order-md-2"
                      }`}
                    >
                      <div className="step-icon">
                        <img
                          src={step.imageSrc}
                          alt={step.imageAlt}
                          className={step.imageClass}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
