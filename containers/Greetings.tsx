import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import SocialLinks from "../components/SocialLinks";

const myImage = './img/icons/common/personal4.jpg'

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">{greetings.title + " "}</h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                </Col>
                <Col lg="6">
                <img src={myImage} alt="My title photo" style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
