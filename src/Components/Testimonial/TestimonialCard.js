import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = () => {
    return (
        <Card className="border-0 shadow-sm rounded-0 my-3 bg-card">
                <div className="Special-badge"></div>
                <Card.Body className="text-center">
                    <Card.Subtitle variant="h6" className="py-3">15 October 2015-27 March 2018</Card.Subtitle>
                    <Card.Title className="py-3">Professional Art and Web Design</Card.Title>
                    <Card.Text className="p-2">
                        loream isam Mauris scelerisque ut ipsum id vulputate. Nulla laoreet, ligula vel congue ultricies, nibh ipsum. loream isam Mauris scelerisque ut
                </Card.Text>
                </Card.Body>
            </Card>
    );
};

export default TestimonialCard;