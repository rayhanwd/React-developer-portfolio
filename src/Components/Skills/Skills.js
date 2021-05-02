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
                        <p>loream isam Mauris scelerisque ut ipsum id vulputate. Nulla laoreet, ligula vel congue ultricies, nibh ipsum.</p>


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
                        <p>loream isam Mauris scelerisque ut ipsum id vulputate. Nulla laoreet, ligula vel congue ultricies, nibh ipsum.</p>
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