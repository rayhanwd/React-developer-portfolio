import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactAddress from './ContactAddress';
import ContactMail from './ContactMail';

const Contact = () => {
    return (
        <div className="my-5">
            <div className="text-center  py-5">
                <h4 className="skill-info-text mb-0">Contact me</h4>
                <div className="contact-border"></div>
            </div>
            <Container>
                <Row>
                    <Col md={4}>
                    <ContactAddress></ContactAddress>
                    </Col>
                    <Col md={8}>
                    <ContactMail></ContactMail>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;