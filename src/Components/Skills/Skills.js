import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


import { Row, Col, Container } from 'react-bootstrap';
import ProgressLine from './ProgressLine';
const Skills = () => {
    return (
        <div>
            <div className="text-center m-5 mb-5">
                <h4 className="skill-info-text mb-0">Skills</h4>
                <div className="skill-border"></div>
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="my-5 mb-5">
                            <h4 className="design-info-text mb-0">Design Skills</h4>
                            <div className="design-skill-border"></div>
                        </div>
                        <p>Hello! I am a professional react JS developer. I will create a single-page application from start to end with react JS. But if you had an existing HTML file I will convert it into a single page application with react JS.</p>


                        <ProgressLine
                            label="Html"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "83%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                        <ProgressLine
                            label="Css"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "87%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                        <ProgressLine
                            label="Bootstrap"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "86%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                        <ProgressLine
                            label="Material Ui"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "79%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                          <ProgressLine
                            label="Sass"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "79%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                    </Col>
                    <Col md={6}>
                        <div className="my-5 mb-5">
                            <h4 className="coding-info-text mb-0">Coding Skills</h4>
                            <div className="coding-skill-border"></div>
                        </div>
                        <p>I can cover front-end development with React JS. I want to take a new challenge with MERN Stack Project. I will create a rest API with node JS, Express JS, and MongoDB for backend handling.</p>
                        <ProgressLine
                            label="Javascript(Es6)"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "89%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                          <ProgressLine
                            label="React JS"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "89%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                          <ProgressLine
                            label="Node JS"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "88%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                          <ProgressLine
                            label="Express JS"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "88%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                          <ProgressLine
                            label="MongoDb"
                            backgroundColor="#666666"
                            visualParts={[
                                {
                                    percentage: "89%",
                                    color: "#fe7e11"
                                }
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;