import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import vpn_service_img from '../Assets/Images/vpn_services.png';
import Cooking_Master_img from '../Assets/Images/Cooking_Master.png';
import Current_weather_app_img from '../Assets/Images/Current_weather_app.png';
import Professional_sport_img from '../Assets/Images/Professional_sport.png';
import Dental_service_img from '../Assets/Images/dental_service.png';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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
        feature:{
            a: 'User and Admin dashboard',
            b: 'Firebase Authentication',
            c: 'Sprite Payment Gateway',
            d: 'Rest API build Node express and Mongodb',
            e: 'React spring animation',
            f: 'user Login method implement'

        },
        img: vpn_service_img,
        liveUrl: 'https://hoursevpnservice.web.app/',
        gitUrl: 'https://github.com/rayhanwd/Creative-agency-vpn-services'
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
        feature:{
            a: 'Implement search bar and search by inter key press',
            b: 'Result a lot of recipe from DB meal API',
            c: 'Filter and showing specific details by clicking any recipe',
            d: 'Implement code from javascript ES6 feature',
            e: 'Use Css Flexbox',
            f: 'Used ES6 feature'

        },
        img: Cooking_Master_img,
        liveUrl: 'https://rayhanwd.github.io/cooking-master/',
        gitUrl: 'https://github.com/rayhanwd/cooking-master'
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
        feature:{
            a: 'have 250+ countries current weather',
            b: 'Have conditional rendering for weather icon',
            c: 'HTTP request and fetch API',
            d: 'Code refactoring',
            e: 'responsive design',
            f: 'Used ES6 feature'

        },
        img: Current_weather_app_img,
        liveUrl: 'https://rayhanwd.github.io/current-weatherApp/',
        gitUrl: 'https://github.com/rayhanwd/current-weatherApp'
    },
    {
        title: 'Sport Clubs',
        tools: {
            html: 'Html',
            css: 'Css',
            bootstrap: 'Bootstrap',
            React: 'React Js',
        },
        feature:{
            a: '200+ Clubs information implement here from Sport API',
            b: 'UseState, UseEffect, Dynamic routing',
            c: 'HTTP request and fetch API',
            d: 'Code refactoring',
            e: 'responsive design',
            f: 'user Login method implement'

        },

        img: Professional_sport_img,
        liveUrl: 'https://professional-sport-team.netlify.app/',
        gitUrl: 'https://github.com/rayhanwd/A-sport-team-builder-react-js'
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
        feature:{
            a: 'Admin control panel',
            b: 'Appointment page optimization',
            c: 'Dynamic Functionality,user Authentication by firebase',
            d: 'patient see their appointment and current status,implement date picker',
            e: 'UseState, UseEffect, Dynamic routing,Rest API',
            f: 'user Login method implement'

        },

        img: Dental_service_img,
        liveUrl: 'https://dental-service-5195f.web.app/',
        gitUrl: 'https://github.com/rayhanwd/dental-service'
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
                                <Card className="shadow position-relative card-div mb-5">
                                    <div className="portfolio">
                                        <Card.Img variant="top" src={data.img} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <div className="my-4">
                                            <Badge className="portfolio-tool">{data.tools.React}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.JavaScript}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.Node}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.API}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.Express}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.MongoDB}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.Firebase}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.Netlify}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.bootstrap}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.css}</Badge>
                                            <Badge className="portfolio-tool">{data.tools.html}</Badge>

                                        </div>
                                    </Card.Body>
                                    <div className="position-absolute hover-text">
                                        <h4>{data.title}</h4>
                                        <h5>Main Features :</h5>
                                        <ol>
                                        <li>{data.feature.a}</li>
                                        <li>{data.feature.b}</li>
                                        <li>{data.feature.c}</li>
                                        <li>{data.feature.d}</li>
                                        <li>{data.feature.e}</li>
                                        <li>{data.feature.f}</li>
                                        </ol>
                                        <a href={data.liveUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live preview</a>
                                        <a href={data.gitUrl} target="_blank" rel="noopener noreferrer"><FaGithub /> Source code</a>
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