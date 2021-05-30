import React, { Fragment } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaHandPointDown } from "react-icons/fa";
import NavigationBar from './NavigationBar';

const Header = () => {
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div className="bg_image">
                <Container className="padding-top">
                    <Row>
                        <Col sm={12}>
                            <div class="text-center special-text">
                                <span className="welcome-text">Welcome to my World</span>
                                <h1 class="title">👋I’m Kazi Rayhan
		                    <br></br>
                                    <div class="">
                                        <span>Front End Developer</span>
                                    </div>
                                </h1>
                                <div class="social-icons">
                                    <div className="mt-3">
                                        <a href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FaGithub /></span></a>
                                        <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FaLinkedinIn /></span></a>
                                        <a href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FaFacebookF /></span></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FaTwitter /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center">
                    <a href="#about"><span className="arrow-icon"><FaHandPointDown /></span></a>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default Header;