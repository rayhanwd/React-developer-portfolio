import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Education from './Education';
import Experiences from './Experiences';

const EducationAndExperience = () => {
    return (
        <div>
            <div className="text-center m-5 mb-5">
                <h4 className="skill-info-text mb-0">Resume</h4>
                <div className="resume-border"></div>
            </div>
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="my-5 mb-5">
                            <h4 className="design-info-text mb-0">Education</h4>
                            <div className="education-border"></div>
                        </div>
                        <Education></Education>
                        <Education></Education>
                        <Education></Education>
                    </Col>

                    <Col md={12} lg={6}>
                        <div className="my-5 mb-5">
                            <h4 className="design-info-text mb-0">Experiences</h4>
                            <div className="experience-border"></div>
                        </div>
                        <Experiences></Experiences>
                        <Experiences></Experiences>
                        <Experiences></Experiences>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EducationAndExperience;