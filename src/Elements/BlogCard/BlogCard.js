import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BlogCard = () => {
    return (
        <Col md={4}>
                        <Card className="blog-card shadow-sm">
                            <Card.Img variant="top" src="https://miro.medium.com/max/600/1*m1SWfAi5vNDaRP1GCMSgZA.jpeg" />
                            <Card.Body>
                                <Card.Title>HOW TO CREATE LOGO FOR YOUR BUSHINESS.</Card.Title>
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

export default BlogCard;