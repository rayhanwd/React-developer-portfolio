import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TiSocialGithubCircular,TiSocialLinkedinCircular,TiSocialFacebookCircular,TiSocialTwitterCircular } from "react-icons/ti";


const Footer = () => {
    return (
        <div className="bg-light py-2">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="mt-2">
                            <p className="footer-text">One Page Personal Portfolio website By kazi rayhan @ 2021</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="mt-2 float-right">
                            <span className="footer-icon"><TiSocialGithubCircular /></span>
                            <span className="footer-icon"><TiSocialLinkedinCircular /></span>
                            <span className="footer-icon"><TiSocialFacebookCircular /></span>
                            <span className="footer-icon"><TiSocialTwitterCircular /></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;