import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const MyFanFact = () => {
    return (
        <div className="bg-light mt-5">
            <Container>
            <Row>
                <Col md={2} lg={3}>
                    <div class="text-center my-5" style={{ width: '16rem' }}>
                        <div className="fan-card-icon"><FaRegHeart /></div>
                        <div class="fan-card-body">
                            <h3 class="fan-card-title">250+</h3>
                            <h6 class="fan-card-text">Happy Client</h6>
                        </div>
                    </div>
                </Col>
                <Col md={2} lg={3}>
                    <div class="text-center my-5" style={{ width: '16rem' }}>
                        <div className="fan-card-icon"><FaRegChartBar /></div>
                        <div class="fan-card-body">
                            <h3 class="fan-card-title">89849</h3>
                            <h6 class="fan-card-text">Working Hours</h6>
                        </div>
                    </div>
                </Col>
                <Col md={2} lg={3}>
                    <div class="text-center my-5" style={{ width: '16rem' }}>
                        <div className="fan-card-icon"><FaCoffee /></div>
                        <div class="fan-card-body">
                            <h3 class="fan-card-title">3679</h3>
                            <h6 class="fan-card-text">Caffe Cup</h6>
                        </div>
                    </div>
                </Col>
                <Col md={2} lg={3}>
                    <div class="text-center my-5" style={{ width: '16rem' }}>
                        <div className="fan-card-icon"><FaStar /></div>
                        <div class="fan-card-body">
                            <h3 class="fan-card-title">120+</h3>
                            <h6 class="fan-card-text">Review and Rating</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default MyFanFact;