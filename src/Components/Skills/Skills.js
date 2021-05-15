import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SkillCard from './../../Elements/SkillCard.js/SkillCard';

const Skills = () => {
    return (
        <Container>
            <div className="page-title">
                <h2 className="">Skills</h2>
            </div>
            <Row>
                <Col md={12}>
                    <SkillCard></SkillCard>
                </Col>
                <Col md={12}>
                    <SkillCard></SkillCard>
                </Col>
                <Col md={12}>
                    <SkillCard></SkillCard>
                </Col>
                <Col md={12}>
                    <SkillCard></SkillCard>
                </Col>
                <Col md={12}>
                    <SkillCard></SkillCard>
                </Col>
                <Col md={12}>
                    <SkillCard></SkillCard>
                </Col>
            </Row>

        </Container>
    );
};

export default Skills;