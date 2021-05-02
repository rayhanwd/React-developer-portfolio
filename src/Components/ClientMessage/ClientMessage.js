import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClientMessage = () => {
    return (
        <div className="bg-light mt-5">
            <Container>
                <Row className="d-flex align-items-center py-5">
                    <Col md={12} lg={6}>
                        <h3 className="py-2 primary-color">I’m Available</h3>
                        <h3 className="py-2 primary-color">for Freelancer Projects !</h3>
                        <p>Tell me about your  project story and project brief</p>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="mt-4 float-right">
                            <Link to="/contact" className="dev-button">Hire me</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClientMessage;