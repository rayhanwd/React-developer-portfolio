import React from 'react';
import { Card } from 'react-bootstrap';
import { TiSocialGithubCircular } from "react-icons/ti";
const SkillCard = () => {
    return (
        <Card className="shadow-sm mb-5">
                <div className="d-flex justify-content-between align-items-center">
                <div className="skill-icon">
                <TiSocialGithubCircular />
                </div>
                <Card.Body className="ml-5">
                    <Card.Title>Design</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                </Card.Body>
                </div>
            </Card>
    );
};

export default SkillCard;