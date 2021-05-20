import React from 'react';
import { Col, Card } from 'react-bootstrap';
import vpn_service_img from '../../Assets/Images/vpn_services.png';
import Cooking_Master_img from '../../Assets/Images/Cooking_Master.png';
import Current_weather_app_img from '../../Assets/Images/Current_weather_app.png';
import Professional_sport_img from '../../Assets/Images/Professional_sport.png';

const CardBox = () => {
    return (
        <>
            <Col md={4}>
                <Card className="shadow-sm position-relative card-div">
                    <div className="portfolio">
                        <Card.Img variant="top" src={vpn_service_img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Creative Agency</Card.Title>
                        <span class="badge bg-primary">React</span><span class="badge bg-primary ml-3">Bootstrap</span><span class="badge bg-primary ml-3">Node Js</span><span class="badge bg-primary ml-3">Mongo DB</span><span class="badge bg-primary">Firebase</span>
                    </Card.Body>
                    <div className="position-absolute hover-text">
                        <a href="https://hoursevpnservice.web.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                    </div>
                    <div className="position-absolute hover-text">
                        <a href="https://hoursevpnservice.web.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="shadow-sm position-relative card-div">
                    <div className="portfolio">
                        <Card.Img variant="top" src={Cooking_Master_img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Cooking Master Food Delivery</Card.Title>
                        <span class="badge bg-primary">React</span><span class="badge bg-primary ml-3">Bootstrap</span><span class="badge bg-primary ml-3">Node Js</span><span class="badge bg-primary ml-3">Mongo DB</span><span class="badge bg-primary">Firebase</span>
                    </Card.Body>
                    <div className="position-absolute hover-text">
                        <a href="https://rayhanwd.github.io/cooking-master/" target="_blank" rel="noopener noreferrer">Live preview</a>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
            <Card className="shadow-sm position-relative card-div">
                    <div className="portfolio">
                        <Card.Img variant="top" src={Current_weather_app_img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                        <span class="badge bg-primary">React</span><span class="badge bg-primary ml-3">Bootstrap</span><span class="badge bg-primary ml-3">Node Js</span><span class="badge bg-primary ml-3">Mongo DB</span><span class="badge bg-primary">Firebase</span>
                    </Card.Body>
                    <div className="position-absolute hover-text">
                        <a href="https://rayhanwd.github.io/current-weatherApp/" target="_blank" rel="noopener noreferrer">Live preview</a>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
            <Card className="shadow-sm position-relative card-div">
                    <div className="portfolio">
                        <Card.Img variant="top" src={Professional_sport_img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Sport Team News</Card.Title>
                        <span class="badge bg-primary">React</span><span class="badge bg-primary ml-3">Bootstrap</span><span class="badge bg-primary ml-3">Node Js</span><span class="badge bg-primary ml-3">Mongo DB</span><span class="badge bg-primary">Firebase</span>
                    </Card.Body>
                    <div className="position-absolute hover-text">
                        <a href="https://professional-sport-team.netlify.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                    </div>
                </Card>
            </Col>
            <Col md={4}>
            <Card className="shadow-sm position-relative card-div">
                    <div className="portfolio">
                        <Card.Img variant="top" src={vpn_service_img} />
                    </div>
                    <Card.Body>
                        <Card.Title>Creative Agency</Card.Title>
                        <span class="badge bg-primary">React</span><span class="badge bg-primary ml-3">Bootstrap</span><span class="badge bg-primary ml-3">Node Js</span><span class="badge bg-primary ml-3">Mongo DB</span><span class="badge bg-primary">Firebase</span>
                    </Card.Body>
                    <div className="position-absolute hover-text">
                        <a href="https://hoursevpnservice.web.app/" target="_blank" rel="noopener noreferrer">Live preview</a>
                    </div>
                </Card>
            </Col>
        </>

    );
};

export default CardBox;