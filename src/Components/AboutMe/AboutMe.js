import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import DeveloperImg from '../../Images/webdeveloper.png';
const AboutMe = () => {
    return (
        <div className="bg-light">
            <Container>
                <div className="about-dev">
                    <h4 className="dev-info-text pt-5">About Me</h4>
                    <div className="about-border"></div>
                </div>
                <Row>
                    <Col md={6}>
                        <Image className="img-fluid p-5" src={DeveloperImg} alt="developer" />
                    </Col>
                    <Col md={6}>
                        <div className="mt-5">
                            <p>Hello I am Kazi Rayhan, I am a freelance web designer or
                        developer from Jhenaidah, Bangladesh.</p>
                            <p>I
                            performed full-stack development for interactive web applications to
                            improve functionality and user experience using HTML, CSS, Bootstrap,
                            Functional JavaScript, and Mostly use for front-end React JS And
                            Back-End with Node JS, Express JS, MongoDB. I can cover front-end
development with React JS.</p>
                        </div>

                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="pb-3">Name:</td>
                                        <td className="pl-5 pb-3">Kazi Rayhan</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-3">Email:</td>
                                        <td className="pl-5 pb-3">rayhanofficial2200@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-3">Date of Birth:</td>
                                        <td className="pl-5 pb-3">26 Oct 1999</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-3">Nationality:</td>
                                        <td className="pl-5 pb-3">Bangladesh</td>
                                    </tr>
                                    <tr>
                                        <td className="pb-3">Address:</td>
                                        <td className="pl-5 pb-3">Shailkupa,Jhenaidah Dhaka</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;