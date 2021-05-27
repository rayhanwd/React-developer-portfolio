import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer-section py-2">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="mt-5">
                            <a href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><FaGithub /></span></a>
                            <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><FaLinkedinIn /></span></a>
                            <a href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><FaFacebookF /></span></a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><FaTwitter /></span>
                            </a>
                        </div>
                        <div className="mt-2">
                            <p className="footer-text">Copyright ©2021 All Rights Reserved
                            <br/>Designed by <span className="author-name">Kazi Rayhan</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;