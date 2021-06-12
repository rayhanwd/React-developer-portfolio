import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter, FaHandPointDown } from "react-icons/fa";
import NavigationBar from './NavigationBar';
import profile_pic from './../Assets/Images/Banner_profile_pic.png';

const Header = () => {
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div className="bg_image">
                <Container className="padding-top">
                    <Row>
                        <Col className="m-0 p-0" md={6}>
                            <div class="special-text">
                                <h2 className="welcome-text">Welcome to my World</h2>
                                <h1 class="title">👋I’m Kazi Rayhan
		                    <br></br>
                                    <div class="">
                                        <span>Front End Developer</span>
                                    </div>
                                </h1>
                                <div class="social-icons">
                                    <div className="mt-3">
                                        <a href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer"><span className="social-icon"><FaGithub /></span></a>
                                        <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" target="_blank" rel="noopener noreferrer"><span className="social-icon ml-4"><FaLinkedinIn /></span></a>
                                        <a href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer"><span className="social-icon ml-4"><FaFacebookF /></span></a>
                                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="social-icon ml-4"><FaTwitter /></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                       <div className="text-center mt-4">
                       <img className="img-fluid banner_profile shadow-lg"src={profile_pic} alt="" srcset=""/>
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