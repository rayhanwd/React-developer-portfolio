import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { TiSocialGithubCircular } from "react-icons/ti";
import { Link } from 'react-router-dom';
const ServicesCard = () => {
    return (
        <Col md={4}>
            <Card className="shadow-sm mb-5">
                <div className="service-icon">
                    <TiSocialGithubCircular />
                </div>
                <Card.Body>
                    <Card.Title>Design</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                    <Link className="blog-button">Read More</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServicesCard;