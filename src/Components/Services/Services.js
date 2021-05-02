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
                <div className="roundedCircle"></div>
                <div className="border0"></div>
            </div>
            <Row>
                <Col md={6} lg={4}>
                    <div class="card text-center border-0 bg-light rounded-0 mb-4 shadow-sm" style={{ width: '22rem' }}>
                        <div className="card-icon"><FaCode /></div>
                        <div class="card-body">
                            <h5 class="service-title">Web Design</h5>
                            <p class="service-dec">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <h5 class="service-title">Web Design</h5>
                            <p class="service-dec">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <h5 class="service-title">Web Design</h5>
                            <p class="service-dec">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <h5 class="service-title">Web Design</h5>
                            <p class="service-dec">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                            <h5 class="service-title">Web Design</h5>
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
                            <h5 class="service-title">Web Design</h5>
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