import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
const SkillData = [
    {
        image: 'https://i.ibb.co/Y84SPhn/Png-Item-6644509.png',
        title: 'React',
    },
    {
        image: 'https://i.ibb.co/MC3fXBJ/js.png',
        title: 'Javascript',
    },
    {
        image: 'https://i.ibb.co/mSK54DF/node.png',
        title: 'Node JS',
    },
    {
        image: 'https://i.ibb.co/VgRnKZt/pngkit-ifunny-watermark-png-2254691.png',
        title: 'MongoDB',
    },
    {
        image: 'https://i.ibb.co/nc2XCxP/ts.png',
        title: 'TypeScript',
    },
    {
        image: 'https://i.ibb.co/bQzjJ5p/material.png',
        title: 'Material UI',
    },
    {
        image: 'https://i.ibb.co/Cwh98n5/firebase.png',
        title: 'Firebase',
    },
    {
        image: 'https://i.ibb.co/SmgyHtR/heroku.png',
        title: 'Heroku',
    },
    {
        image: 'https://i.ibb.co/LNp1Qh9/sass.png',
        title: 'Sass',
    },
    {
        image: 'https://i.ibb.co/KDGNZDH/bootstrap.png',
        title: 'Bootstrap',
    },
    {
        image: 'https://i.ibb.co/dWK5RCW/git.png',
        title: 'GitHub',
    },
    {
        image: 'https://www.markusantonwolf.com/media/pages/blog/tailwind-css/265298487-1596675041/tailwind-css-logo.svg',
        title: 'Tailwind css',
    },
    {
        image: 'https://i.ibb.co/2PsYWF8/3920311-middle.png',
        title: 'Css',
    },
    {
        image: 'https://i.ibb.co/RN0t6Xh/html.png',
        title: 'Html',
    }
];
const Skills = () => {
    return (
        <Container>
            <div className="page-title">
                <h3 className="">Skills,Tools and Technology</h3>
            </div>
            <Slide bottom>
            <Row>
                {
                    SkillData.map(data =>
                        <Col md={2}>
                            <Card className="card_effect py-4">
                                <div className="mx-auto">
                                    <div className="skill-icon">
                                        <Card.Img src={data.image} />
                                    </div>
                                    <h6 className="text-center pt-3">
                                    {data.title}
                                    </h6>
                                </div>
                            </Card>
                        </Col>)
                }
            </Row>
            </Slide>
        </Container>
    );
};

export default Skills;