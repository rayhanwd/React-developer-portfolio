import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SampleCard from "./SampleCard";

const ProjectSample = () => {



    return (
        <div className="my-5">
            <div className="text-center  py-5">
                <h4 className="skill-info-text mb-0">Latest Project</h4>
                <div className="project-border"></div>
            </div>
        <Container>
            <Row>
                <Col md={4}>
                <SampleCard></SampleCard>
                </Col>
                <Col md={4}>
                <SampleCard></SampleCard>
                </Col>
                <Col md={4}>
                <SampleCard></SampleCard>
                </Col>
                <Col md={4}>
                <SampleCard></SampleCard>
                </Col>
                <Col md={4}>
                <SampleCard></SampleCard>
                </Col>
                <Col md={4}>
                <SampleCard></SampleCard>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ProjectSample;