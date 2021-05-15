import React from 'react';
import { Col, Card } from 'react-bootstrap';
import vpn_service_img from '../../Assets/Images/vpn_services.png';
const CardBox = () => {
    return (
        <Col md={4}>
            <Card className="shadow-sm">
                <div className="portfolio">
                <Card.Img variant="top" src={vpn_service_img} />
                </div>
                <Card.Body>
                    <Card.Title>HOW TO CREATE LOGO FOR YOUR BUSHINESS.</Card.Title>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default CardBox;