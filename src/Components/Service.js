import React from 'react';
import { Row, Container, Col, Card } from "react-bootstrap";
import { AiOutlineAntDesign, AiOutlineApi, AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaCode, FaBlog, FaReact } from "react-icons/fa";
import Slide from 'react-reveal/Slide';

import { Link } from 'react-router-dom';
const Service = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="page-title">
                    <h2 className="">🚛Services</h2>
                </div>
                <Slide top>
                <Row>
                    <Col md={4}>
                        <Card className="shadow-sm mb-5 service-card">
                            <div className="service-icon">
                                <AiOutlineAntDesign />
                            </div>
                            <Card.Body>
                                <Card.Title>Design</Card.Title>
                                <Card.Text>
                                    Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. What does a web designer do? A web designer is responsible for creating the design and layout of a website or web pages.
        </Card.Text>
                                <Link className="blog-button">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow-sm mb-5 service-card">
                            <div className="service-icon">
                                <FaCode />
                            </div>
                            <Card.Body>
                                <Card.Title>Development</Card.Title>
                                <Card.Text>
                                    Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.
        </Card.Text>
                                <Link className="blog-button">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow-sm mb-5 service-card">
                            <div className="service-icon">
                                <FaBlog />
                            </div>
                            <Card.Body>
                                <Card.Title>Blog Development</Card.Title>
                                <Card.Text>
                                    Create a new blog with Modern Technology. design and development by react js and node js. Awesome blog admin panel.write your own blog post. share with social media and others.
        </Card.Text>
                                <Link className="blog-button">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow-sm mb-5 service-card">
                            <div className="service-icon">
                                <AiOutlineApi />
                            </div>
                            <Card.Body>
                                <Card.Title>API Development</Card.Title>
                                <Card.Text>
                                    Create full Rest API with Node Js , express js and mongodb .have more than authorization CRUD functionality. Full fresh and dynamical action.
        </Card.Text>
                                <Link className="blog-button">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow-sm mb-5 service-card">
                            <div className="service-icon">
                                <FaReact />
                            </div>
                            <Card.Body>
                                <Card.Title>React Front End Development</Card.Title>
                                <Card.Text>
                                    Create full functional React Application. help with react router,Context ApI,Dynamic route, Use params, Use history etc.
        </Card.Text>
                                <Link className="blog-button">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow-sm mb-5 service-card">
                            <div className="service-icon">
                                <AiOutlineAppstoreAdd />
                            </div>
                            <Card.Body>
                                <Card.Title>Web App Development</Card.Title>
                                <Card.Text>
                                    Create full functional modern web Application with MERN Stack. Special Technology have to React js and Node Js. Modern Database MongoDB and Express js framework.
        </Card.Text>
                                <Link className="blog-button">Read More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Slide>
            </Container>
        </div>
    );
};

export default Service;