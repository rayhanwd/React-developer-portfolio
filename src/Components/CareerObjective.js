import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import dev_img from '../../src/Assets/Images/profile_img.png';
const CareerObjective = () => {
    return (
        <Fragment>
            <div id="about" className="about-section">
                <Container>
                    <div className="page-title">
                        <h2 className="">🙋‍♂️About Me</h2>
                    </div>
                    <Row>
                        <Col md={6}>
                            <div className="Profile___img">
                                <Image className="img-fluid Profile_img_border" src={dev_img} alt="developer" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="mt-5">
                                <h3 className="pt-3">Kazi Rayhan</h3>
                                <h4 className="py-3">Front-End Developer</h4>
                                <p style={{ fontSize: '20px' }}>Next Achievement: To improve as a Full-stack Web Developer and also an industry professional.
Frontend developer that specializes in utilizing React.js to create user-facing functionality. I'm looking forward to putting my enthusiasm into practice on a full-time basis. Every day, I attempt to learn something new to advance my career as a High-Level programmer.</p>
                            </div>

                            <div>
                                <div className="d-flex justify-content-space-between">
                                    <div className="">
                                        <h4>Professional Skills :</h4>
                                        <span className="Skill-level"> Expertise : </span><p style={{ fontSize: '20px' }}>React.js ,Redux, Javascript,React-Router, Context-Api,React-Bootstrap,Bootstrap,Html5,CSS3,SASS.</p>

                                        <span className="Skill-level">Comfortable :</span><p style={{ fontSize: '20px' }}>Node.js ,Express.js,MongoDB,Stripe.js,Material-UI,Gatsby</p>

                                        <span className="Skill-level">Familiar :</span><p style={{ fontSize: '20px' }}>PHP, MySQL, TypeScript</p>

                                        <span className="Skill-level">Tools :</span><p style={{ fontSize: '20px' }}>GitHub, VS Code, Firebase, Heroku, Netlify, Chrome Dev Tools</p>
                                    </div>
                                </div>

                            </div>
                            <div className="my-5">
                                <a href="https://drive.google.com/uc?export=download&amp;id=1vQblI0v8I4V8PDCO08J4aiU9Ksuy9tfV" download="" target="blank_" class="btn contact-btn ">DOWNLOAD RESUME</a>
                                <a href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" rel="noreferrer" target="_blank" class="btn contact-btn ml-5">SEND MESSAGE</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default CareerObjective;