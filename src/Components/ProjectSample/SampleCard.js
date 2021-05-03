import React from 'react';
import { Card } from 'react-bootstrap';
const SampleCard = () => {
    return (

        <Card className="border-0 shadow-sm rounded-0 my-3 bg-card">
            <div className="Special-badge"></div>
            <div className="d-flex align-items-center">
                <Card.Img className="project-img" src="https://miro.medium.com/max/600/1*m1SWfAi5vNDaRP1GCMSgZA.jpeg" />
                <div>
                    <Card.Body>
                        <Card.Subtitle variant="h6">01 january 2021 April 2021</Card.Subtitle>
                        <Card.Title>Complete MERN Stack Web Developer</Card.Title>
                        <Card.Text>
                            I have completed the MERN Stack Web Developing with Programming Hero.
                </Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Card>

    );
};

export default SampleCard;