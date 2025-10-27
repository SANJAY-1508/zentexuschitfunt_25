import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import FundTable from "./components/FundTable";
import FundPlanCard from "./components/FundPlanCard";
import img1 from "../assets/diwali-chit-fund-banner-D2a1cjBH (1).jpeg";
import img2 from "../assets/diwali-chit-fund-banner-D2a1cjBH (1).jpeg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 200,
      duration: 1000,
      easing: "ease-out-back",
      once: true,
    });
  }, []);

  const fundPlans = [
    { plan: "₹100 X 45 WEEKS", total: "₹4500 + ₹500", amount: "₹5000" },
    { plan: "₹300 X 9 MONTHS", total: "₹2700 + ₹300", amount: "₹3000" },
    { plan: "₹500 X 9 MONTHS", total: "₹4500 + ₹500", amount: "₹5000" },
    { plan: "₹1000 X 9 MONTHS", total: "₹9000 + ₹1000", amount: "₹10000" },
    { plan: "₹2000 X 9 MONTHS", total: "₹18000 + ₹2000", amount: "₹20000" },
  ];

  return (
    <>
      <div className="over">
        <AppBar />
      </div>
      <div className="min-h-screen">
        {/* Hero Section - Enhanced with overlay and CTA */}
        <section className="hero-section position-relative">
          <div className="hero-overlay"></div>
          <Container className="position-relative z-index-1">
            <Row className="align-items-center min-vh-75">
              <Col lg={6}>
                <div
                  className="hero-content text-white pe-lg-5"
                  data-aos="fade-right"
                >
                  <h1 className="display-3 fw-bold mb-4 lh-1">
                    Diwali Crackers Fund 2026
                  </h1>
                  <p className="lead fs-3 mb-4 opacity-90">
                    Secure your festive joy with easy monthly installments. Get
                    1.5 months free bonus + 60% discount on bookings. Guaranteed
                    delivery before Diwali!
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Button
                      variant="warning"
                      size="lg"
                      className="px-5 py-3 fw-bold rounded-0 border-0 shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      Start Booking Now
                    </Button>
                    <Button
                      variant="outline-light"
                      size="lg"
                      className="px-5 py-3 fw-bold rounded-0 border-2 shadow-lg"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <img
                  src={img2}
                  className="hero-img w-100"
                  alt="Diwali Crackers Fund"
                  data-aos="fade-left"
                  data-aos-delay="600"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Fund Details Section - Professional Cards */}
        <section className="fund-details-section py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={10}>
                <h2
                  className="text-center text-white fw-bold display-4 mb-3"
                  data-aos="fade-down"
                >
                  Fund Details & Savings Plans
                </h2>
                <p className="text-center text-white-50 lead mb-0">
                  Transparent, secure, and tailored for your Diwali celebrations
                </p>
              </Col>
            </Row>
            <Row className="g-4">
              <Col lg={6}>
                <Card
                  className="fund-card h-100 border-0 shadow-xl bg-dark bg-opacity-80 text-white"
                  data-aos="fade-up"
                >
                  <Card.Body className="p-5">
                    <Card.Title className="h4 fw-bold text-gold mb-4">
                      <i className="fas fa-info-circle me-2"></i>Key Information
                    </Card.Title>
                    <ul className="list-unstyled ps-0">
                      <li className="mb-4 p-3 bg-light bg-opacity-10 rounded-3 d-flex align-items-center">
                        <i className="fas fa-calendar-alt text-gold me-3 fs-5"></i>
                        <div>
                          <strong>Fund Period:</strong> October 2025 - July 2026
                        </div>
                      </li>
                      <li className="mb-4 p-3 bg-light bg-opacity-10 rounded-3 d-flex align-items-center">
                        <i className="fas fa-credit-card text-gold me-3 fs-5"></i>
                        <div>
                          <strong>Installments:</strong> Due before 10th of
                          every month
                        </div>
                      </li>
                      <li className="mb-4 p-3 bg-light bg-opacity-10 rounded-3 d-flex align-items-center">
                        <i className="fas fa-tag text-gold me-3 fs-5"></i>
                        <div>
                          <strong>Booking:</strong> 10 Aug 2026 | 60% Discount
                          Applied
                        </div>
                      </li>
                      <li className="mb-4 p-3 bg-light bg-opacity-10 rounded-3 d-flex align-items-center">
                        <i className="fas fa-truck text-gold me-3 fs-5"></i>
                        <div>
                          <strong>Dispatch:</strong> End of Aug 2026 | Parcel
                          Service
                        </div>
                      </li>
                      <li className="mb-4 p-3 bg-light bg-opacity-10 rounded-3 d-flex align-items-center">
                        <i className="fas fa-exclamation-triangle text-gold me-3 fs-5"></i>
                        <div>
                          <strong>Missed Payment:</strong> 60% Discount | No
                          Bonus
                        </div>
                      </li>
                      <li className="p-3 bg-light bg-opacity-10 rounded-3 d-flex align-items-center">
                        <i className="fas fa-shipping-fast text-gold me-3 fs-5"></i>
                        <div>
                          <strong>Free Shipping:</strong> Tamilnadu Only
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  className="fund-card h-100 border-0 shadow-xl bg-dark bg-opacity-80 text-white"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Card.Body className="p-5">
                    <Card.Title className="h4 fw-bold text-gold mb-4 text-center">
                      Plan Summary
                    </Card.Title>
                    <div className="table-responsive">
                      <FundTable data={fundPlans} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Plans Section - Grid with Icons */}
        <section className="plans-section py-5 bg-dark bg-opacity-20">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8}>
                <h2
                  className="text-center text-white fw-bold display-4 mb-3"
                  data-aos="fade-down"
                >
                  Choose Your Plan
                </h2>
                <p className="text-center text-white-50 lead">
                  Flexible options to suit every budget – Light up Diwali
                  brighter!
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center g-4">
              {[
                {
                  image: img1,
                  amount: "100",
                  title: "வார திட்டம்",
                  monthsText: "₹100 X 45 Weeks",
                  bonusText: "₹4500 + ₹500",
                  totalText: "5000",
                },
                {
                  image: img1,
                  amount: "300",
                  title: "மாத திட்டம்",
                  monthsText: "₹300 X 9 MONTHS",
                  bonusText: "₹2700 + ₹300",
                  totalText: "3000",
                },
                {
                  image: img1,
                  amount: "500",
                  title: "மாத திட்டம்",
                  monthsText: "₹500 X 9 MONTHS",
                  bonusText: "₹4500 + ₹500",
                  totalText: "5000",
                },
                {
                  image: img1,
                  amount: "1000",
                  title: "மாத திட்டம்",
                  monthsText: "₹1000 X 9 MONTHS",
                  bonusText: "₹9000 + ₹1000",
                  totalText: "10000",
                },
                {
                  image: img1,
                  amount: "2000",
                  title: "மாத திட்டம்",
                  monthsText: "₹2000 X 9 MONTHS",
                  bonusText: "₹18000 + ₹2000",
                  totalText: "20000",
                },
              ].map((plan, index) => (
                <Col lg={4} md={6} key={index}>
                  <FundPlanCard
                    {...plan}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Testimonials Section - New Addition for Professional Touch */}
        <section className="testimonials-section py-5 bg-gold bg-opacity-10">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8}>
                <h2
                  className="text-center text-white fw-bold display-4 mb-3"
                  data-aos="fade-down"
                >
                  What Our Customers Say
                </h2>
                <p className="text-center text-white-50 lead">
                  Join thousands who saved big this Diwali
                </p>
              </Col>
            </Row>
            <Row className="g-4">
              {[
                {
                  quote:
                    "Saved ₹2000 on crackers last year! Easy payments and fast delivery.",
                  name: "Ravi Kumar, Chennai",
                },
                {
                  quote:
                    "The bonus months made all the difference. Highly recommend!",
                  name: "Priya S, Coimbatore",
                },
                {
                  quote:
                    "Professional service from start to finish. Diwali was explosive!",
                  name: "Arun M, Madurai",
                },
              ].map((testimonial, index) => (
                <Col lg={4} key={index}>
                  <Card
                    className="border-0 shadow-xl h-100 bg-dark bg-opacity-80 text-white"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <Card.Body className="p-4 text-center">
                      <i className="fas fa-quote-left text-gold fs-1 mb-3"></i>
                      <p className="lead mb-4 opacity-90">
                        "{testimonial.quote}"
                      </p>
                      <h6 className="fw-bold text-gold">{testimonial.name}</h6>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold mb-3 text-white display-5">
                  Ready to Sparkle This Diwali?
                </h2>
                <p className="lead text-white-50 mb-4">
                  Download the app for seamless tracking, reminders, and
                  exclusive offers
                </p>
                <Button
                  variant="warning"
                  size="lg"
                  className="px-6 py-3 fw-bold rounded-pill shadow-lg fs-4"
                >
                  <i className="fas fa-download me-2"></i>Download APK Now
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
