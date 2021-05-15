import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import dev_img from '../../src/Assets/Images/profile_img.png';
import '../Assets/css/About.css';
import NavigationBar from '../Elements/NavigationBar/NavigationBar';
import Skills from '../Components/Skills/Skills';
import Footer from '../Components/Footer/Footer';
const About = () => {
    document.title='Rayhan | About';
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div className="about-section">
                <Container>
                    <div className="page-title">
                    <h2 className="">🙋‍♂️About Me</h2>
                    </div>
                    <Row>
                        <Col md={6}>
                            <Image className="img-fluid p-5" src={dev_img} alt="developer" />
                        </Col>
                        <Col md={6}>
                            <div className="mt-5">
                                <h3 className="pt-3">Kazi Rayhan</h3>
                                <h4 className="py-3">Front-End Developer</h4>
                                <p>I
                                performed full-stack development for interactive web applications to
                                improve functionality and user experience using HTML, CSS, Bootstrap,
                                Functional JavaScript, and Mostly use for front-end React JS And
                                Back-End with Node JS, Express JS, MongoDB. I can cover front-end
    development with React JS.</p>
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
                                <button className="btn btn-primary">DOWNLOAD RESUME</button>
                                <button className="btn btn-primary ml-5">SEND MESSAGE</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Skills></Skills>
            </div>
            <Footer></Footer>
        </Fragment>
    );
};

export default About;