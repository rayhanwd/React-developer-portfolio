import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TiSocialGithubCircular,TiSocialLinkedinCircular,TiSocialFacebookCircular,TiSocialTwitterCircular } from "react-icons/ti";
import '../../Assets/css/Footer.css';
const Footer = () => {
    return (
        <div className="footer-section py-2">
        <Container>
            <Row>
                <Col md={12}>
                    <div className="mt-3">
                    <a href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialGithubCircular /></span></a>
                        <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialLinkedinCircular /></span></a>
                        <a href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialFacebookCircular /></span></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialTwitterCircular /></span>
                       </a>
                    </div>
                    <div className="mt-1">
                        <p className="footer-text">One Page Personal Portfolio website By kazi rayhan @ 2021</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;