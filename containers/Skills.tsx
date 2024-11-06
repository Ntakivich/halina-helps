import React from "react";
import { Col, Container, Row } from "reactstrap";
import { skillsSection } from "../portfolio";
const myImage = './img/icons/common/additional3.jpg'

const Skills = () => {
  return (
    skillsSection && (
        <section className="text-center my-5 section section-lg section-skills">
        <Container>
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <img 
                    src={myImage} 
                    alt="My title photo" 
                    style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }} 
                  />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                <h3 className="h3 mb-2">{section.title}</h3>
                  <div>
                    {section.skills.map((skill, i) => (
                      <p key={i}>{skill}</p>
                    ))}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    )
  );
};

export default Skills;
