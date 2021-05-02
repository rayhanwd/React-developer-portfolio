import React from 'react';
import { Card } from 'react-bootstrap';
const SampleCard = () => {
    return (
      
        <Card className="border-0 shadow-sm rounded-0 my-3 bg-card">
                <div className="Special-badge"></div>
                <Card.Img variant="top" src="https://miro.medium.com/max/600/1*m1SWfAi5vNDaRP1GCMSgZA.jpeg" />
            </Card>
           
    );
};

export default SampleCard;