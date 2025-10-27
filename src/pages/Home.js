import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import FundTable from "./components/FundTable";
import { Container, Row, Col } from "react-bootstrap";

import FundPlanCard from "./components/FundPlanCard";
import img1 from "../assets/diwali-chit-fund-banner-D2a1cjBH (1).jpeg";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 500,
      duration: 3000,
      easing: "ease",
      mirror: true,
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
        <Container>
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <div className="text-center py-3 text-white fw-bold">
                <h1 className="fs-1">Diwali Crackers Fund 2026</h1>
                <p className="fs-5">
                  Pay monthly installments and get 1.5 months free bonus with
                  60% discount on booking. Enjoy festive savings with guaranteed
                  delivery before Diwali!
                </p>
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </Container>
        {/* fund-section */}
        <Container className="fund-section py-5">
          <Row className="align-items-start">
            {/* LEFT SIDE */}
            <Col lg="6" className="left-text px-5">
              <p>
                <strong>Fund period:</strong> October 2025 - July 2026
              </p>
              <p>
                <strong>Installments:</strong> Pay before 10th of every month
              </p>
              <p>
                <strong>Booking:</strong> 10 Aug 2026 with 60% discount
              </p>
              <p>
                <strong>Dispatch:</strong> End of Aug 2026 via parcel service
              </p>
              <p>
                <strong>Missed payment:</strong> Still eligible for 60%
                discount, but without bonus
              </p>
              <p>
                <strong>Free shipping:</strong> Tamilnadu Only
              </p>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg="6" className="right-table px-4">
              <FundTable data={fundPlans} />
            </Col>
          </Row>
        </Container>
        {/* fund-plans */}
        <Container className="fund-plans py-5">
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <div className="text-center py-3 text-white fw-bold">
                <h1 className="fs-1">Our Funding Plans</h1>
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
          <Row className="justify-content-center mb-4">
            <Col lg="4" className="d-flex justify-content-center">
              <FundPlanCard
                image={img1}
                amount="100"
                title="வார திட்டம்"
                monthsText="₹100 X 45 Weeks"
                bonusText="₹4500 + ₹500"
                totalText="5000"
              />
            </Col>
            <Col lg="4" className="d-flex justify-content-center">
              <FundPlanCard
                image={img1}
                amount="300"
                title="மாத திட்டம்"
                monthsText="₹300 X 9 MONTHS"
                bonusText="₹2700 + ₹300"
                totalText="3000"
              />
            </Col>
            <Col lg="4" className="d-flex justify-content-center">
              <FundPlanCard
                image={img1}
                amount="500"
                title="மாத திட்டம்"
                monthsText="₹500 X 9 MONTHS"
                bonusText="₹4500 + ₹500"
                totalText="5000"
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="4" className="d-flex justify-content-center">
              <FundPlanCard
                image={img1}
                amount="1000"
                title="மாத திட்டம்"
                monthsText="₹1000 X 9 MONTHS"
                bonusText="₹9000 + ₹1000"
                totalText="10000"
              />
            </Col>
            <Col lg="4" className="d-flex justify-content-center">
              <FundPlanCard
                image={img1}
                amount="2000"
                title="மாத திட்டம்"
                monthsText="₹2000 X 9 MONTHS"
                bonusText="₹18000 + ₹2000"
                totalText="20000"
              />
            </Col>
          </Row>
        </Container>
        {/* Download apk */}
        <Container className="download-app-container p-2 ">
          <Row>
            <Col lg="12" className="text-center py-2">
              <h4>Please Download Chit Fund APK File</h4>
              <button className="btn btn-primary">Download APK</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
