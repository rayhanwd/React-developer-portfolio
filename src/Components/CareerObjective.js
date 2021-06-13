import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import dev_img from '../../src/Assets/Images/profile_img.png';
import Slide from 'react-reveal/Slide';
const CareerObjective = () => {
    return (
        <Fragment>
            <div id="about" className="about-section">
                <Container>
                    <Slide top>
                        <div className="page-title">
                            <h2 className="">🙋‍♂️About Me</h2>
                        </div>
                    </Slide>
                    <Row>

                        <Col md={6}>
                            <Slide left>
                                <div className="Profile___img">
                                    <Image className="img-fluid Profile_img_border" src={dev_img} alt="developer" />
                                </div>
                            </Slide>
                        </Col>

                        <Col md={6}>
                            <Slide bottom>
                                <div>
                                    <div className="mt-5">
                                        <h2 className="pt-3">Kazi Rayhan</h2>
                                        <h4 className="py-3">Front-End Developer</h4>
                                        <p style={{ fontSize: '20px' }}>Next Achievement: To improve as a Full-stack Web Developer and also an industry professional.
                                            Frontend developer that specializes in utilizing React.js to create user-facing functionality. I'm looking forward to putting my enthusiasm into practice on a full-time basis. Every day, I attempt to learn something new to advance my career as a High-Level programmer.</p>
                                    </div>
                                </div>
                            </Slide>
                            <div>
                            </div>
                            <Slide right>
                                <div>
                                    <div className="my-5">
                                        <a href="https://drive.google.com/uc?export=download&amp;id=1vQblI0v8I4V8PDCO08J4aiU9Ksuy9tfV" download="" target="blank_" class="btn contact-btn ">DOWNLOAD RESUME</a>
                                        <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" rel="noreferrer" target="_blank" class="btn contact-btn ml-5">SEND MESSAGE</a>
                                    </div>
                                </div>
                            </Slide>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default CareerObjective;