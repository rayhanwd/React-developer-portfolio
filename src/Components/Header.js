import React, { Fragment } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialTwitterCircular } from "react-icons/ti";
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
                            <h2 className="special">based in USA.</h2>
                            <div class="social-icon">
                                <div className="mt-3">
                                    <a href="http://https://github.com/rayhanwd" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialGithubCircular /></span></a>
                                    <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialLinkedinCircular /></span></a>
                                    <a href="https://www.facebook.com/KR.RAYHAN70/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialFacebookCircular /></span></a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><span className="footer-icon"><TiSocialTwitterCircular /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Fragment>
  );
};

export default Header;