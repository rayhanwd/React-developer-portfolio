import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import vpn_service_img from '../Assets/Images/vpn_services.png';
import Cooking_Master_img from '../Assets/Images/Cooking_Master.png';
import Current_weather_app_img from '../Assets/Images/Current_weather_app.png';
import Professional_sport_img from '../Assets/Images/Professional_sport.png';
import Dental_service_img from '../Assets/Images/dental_service.png';

const PortfolioData = [
    {
        title: 'Creative Agency',
        tools: {
            html: 'Html',
            css: 'Css',
            bootstrap: 'Bootstrap',
            React: 'React Js',
            Node: 'Node Js',
            Express: 'Express Js',
            MongoDB: 'MongoDB',
            Heroku: 'Heroku',
            Netlify: 'Netlify',
            Firebase: 'Firebase'
        },
        img: vpn_service_img,
        liveUrl:'https://hoursevpnservice.web.app/',
        gitUrl:'https://github.com/rayhanwd/Creative-agency-vpn-services'
    },
    {
        title: 'Restaurant food menu',
        tools: {
            html: 'Html',
            css: 'Css',
            bootstrap: 'Bootstrap',
            JavaScript: 'JavaScript',
            API: 'API'
        },
        img: Cooking_Master_img,
        liveUrl:'https://rayhanwd.github.io/cooking-master/',
        gitUrl:'https://github.com/rayhanwd/cooking-master'
    },
    {
        title: 'Weather Checking website',
        tools: {
            html: 'Html',
            css: 'Css',
            bootstrap: 'Bootstrap',
            JavaScript: 'JavaScript',
            API: 'API'
        },

        img: Current_weather_app_img,
        liveUrl:'https://rayhanwd.github.io/current-weatherApp/',
        gitUrl:'https://github.com/rayhanwd/current-weatherApp'
    },
    {
        title: 'Sport Clubs',
        tools: {
            html: 'Html',
            css: 'Css',
            bootstrap: 'Bootstrap',
            React: 'React Js',
        },

        img: Professional_sport_img,
        liveUrl:'https://professional-sport-team.netlify.app/',
        gitUrl:'https://github.com/rayhanwd/A-sport-team-builder-react-js'
    },
    {
        title: 'Dental Service',
        tools: {
            html: 'Html',
            css: 'Css',
            bootstrap: 'Bootstrap',
            React: 'React Js',
            Node: 'Node Js',
            Express: 'Express Js',
            MongoDB: 'MongoDB',
            Heroku: 'Heroku',
            Netlify: 'Netlify',
            Firebase: 'Firebase'
        },

        img: Dental_service_img,
        liveUrl:'https://dental-service-5195f.web.app/',
        gitUrl:'https://github.com/rayhanwd/dental-service'
    }
]
const Portfolio = () => {
    return (
        <div className="my-5 pb-5">
            <Container>
                <div className="page-title">
                    <h2 className="">📃Latest Portfolio</h2>
                </div>
                <Row>
                    {
                        PortfolioData.map(data =>
                            <Col md={6} key={data.title}>
                                <Card className="shadow-sm position-relative card-div mb-5">
                                    <div className="portfolio">
                                    <Card.Img variant="top" src={data.img} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                       <div className="my-4">
                                       <p><span class="portfolio-tool">{data.tools.React}</span>
                                       <span class="portfolio-tool">{data.tools.JavaScript}</span>
                                       <span class="portfolio-tool">{data.tools.Node}</span>
                                       <span class="portfolio-tool">{data.tools.API}</span>
                                       <span class="portfolio-tool">{data.tools.Express}</span>
                                       <span class="portfolio-tool">{data.tools.MongoDB}</span></p>
                                       <p><span class="portfolio-tool">{data.tools.Firebase}</span>
                                       <span class="portfolio-tool">{data.tools.Netlify}</span> 
                                       <span class="portfolio-tool">{data.tools.bootstrap}</span>
                                       <span class="portfolio-tool">{data.tools.css}</span>
                                       <span class="portfolio-tool">{data.tools.html}</span>
                                    </p> 

                                       </div> 
                                    </Card.Body>
                                    <div className="position-absolute hover-text">
                                        <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">Live preview</a>
                                        <a href={data.gitUrl} target="_blank" rel="noopener noreferrer">Source Code Git</a>
                                    </div>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;