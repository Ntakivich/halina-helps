import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import SocialLinks from "./SocialLinks";

const myImage = './img/icons/common/personal2.png'

const GithubProfileCard = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={myImage}
                style={{ width: "200px" }}
                alt="My_photo"
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Всегда рада помочь!</h2>
              <p className="lead text-white mt-3">Жду новых сообщений и предложений от вас</p>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
