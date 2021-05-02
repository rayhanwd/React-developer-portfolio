import React from 'react';
import {Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DeveloperImg from '../../Images/webdeveloper.png';
const Introduction = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        <h6>Hello,</h6>
                        <h1 className="dev-name">I'M Kazi Rayhan</h1>
                        <p>Professional web designer</p>
                        <p>@ Developer</p>
                        <div className="mt-4">
                        <Link to="/contact" className="dev-button">Hire</Link>
                        {/* <a class="btn btn-danger" href="https://drive.google.com/uc?export=download..." role="button" target="_blank">Download Resume</a> */}
                        </div>
                    </div>
                </Col>
                <Col md={6} className="mt-3">
                    <Image className="img-fluid" src={DeveloperImg} alt="developer" />
                </Col>
            </Row>

        </Container>
    );
};

export default Introduction;