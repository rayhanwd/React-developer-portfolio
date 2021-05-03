import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { FaRProject } from "react-icons/fa";

const Services = () => {
    return (
        <Container>
            <div className="about-dev m-5 mb-5">
                <h4 className="dev-info-text">Services</h4>
                <div className="service-border"></div>
            </div>
            <Row>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow-sm" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaCode /></div>
                        <div class="card-body">
                            <h5 class="service-title">Web Design</h5>
                            <p class="service-dec">I designed all sites from start to finish using clean hand-coded. Designed and maintained complete websites from basic sites to responsive sites.</p>
                            <div className="mt-4">
                                <Link to="/contact" className="dev-button">Hire me</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaReact /></div>
                        <div class="card-body">
                            <h5 class="service-title">React Web Design</h5>
                            <p class="service-dec">I will create a single-page application from start to end with react JS. But if you had an existing HTML file I will convert it into a single page application with react JS. Most used tools React router DOM, dynamic route and using route parameter to pass data one component to others.</p>
                            <div className="mt-4">
                                <Link to="/contact" className="dev-button">Hire me</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow-sm" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaNodeJs /></div>
                        <div class="card-body">
                            <h5 class="service-title">Rest API</h5>
                            <p class="service-dec"> Back-end also mostly highlights for me, Node JS Rest API, get post, async await, jwt authorization, .env, error handling, and MongoDB Data collection.</p>
                            <div className="mt-4">
                                <Link to="/contact" className="dev-button">Hire me</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow-sm" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaDatabase /></div>
                        <div class="card-body">
                            <h5 class="service-title">Database Management</h5>
                            <p class="service-dec">Use non sql Database with MongoDB.</p>
                            <div className="mt-4">
                                <Link to="/contact" className="dev-button">Hire me</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaConnectdevelop /></div>
                        <div class="card-body">
                            <h5 class="service-title">Firebase Authentication</h5>
                            <p class="service-dec">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="mt-4">
                                <Link to="/contact" className="dev-button">Hire me</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow-sm" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaRProject /></div>
                        <div class="card-body">
                            <h5 class="service-title">Web Application deploy</h5>
                            <p class="service-dec">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="mt-4">
                                <Link to="/contact" className="dev-button">Hire me</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;