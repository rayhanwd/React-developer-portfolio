import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import dev_img from '../../src/Assets/Images/profile_img.png';
const CareerObjective = () => {
    return (
        <Fragment>
            <div className="about-section">
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
                                <p>I am a Front End developer with experience building websites and web applications. I specialize in JavaScript and have professional experience working with React. I also have experience working with Redux, Gatsby. Take a look at my work or get in touch! www.fnrayhan.info</p>
                            </div>

                            <div>
                                <div className="d-flex justify-content-space-between">
                                    <div className="">
                                        <h4 class="mb-4">Education</h4>
                                        <p class="h5">Diploma Engineering in Computer Technology</p>
                                        <p>Magura Polythenic Institute, 2016 - 2020</p>
                                        <p class="h5">Junior Web Developer &amp; MERN Stack</p>
                                        <p>Programming Hero, 2021 - 2021</p>
                                    </div>
                                </div>
                                <div className="">
                                    <h4 class="mb-4">Awards</h4>
                                    <p class="h5">Junior Web Developer</p>
                                    <p>Certified MERN Stack, 2021</p>
                                    <p class="h5">Highly Lover</p>
                                    <p>Javascript, 2020</p>
                                </div>
                            </div>
                            <div className="my-5">
                                <a className="btn btn-primary text-white" href="https://drive.google.com/uc?export=download&amp;id=1vQblI0v8I4V8PDCO08J4aiU9Ksuy9tfV" download="" target="blank_" class="btn btn-primary text-white">DOWNLOAD RESUME</a>
                                <a className="btn btn-primary text-white" href="https://www.linkedin.com/in/kazi-rayhan-b844b2171/" rel="noreferrer" target="_blank" class="btn btn-primary text-white ml-5">SEND MESSAGE</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default CareerObjective;