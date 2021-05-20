import React from 'react';
import { Fragment } from 'react';
import NavigationBar from '../Elements/NavigationBar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import { Col, Card } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
const News = () => {
    document.title = 'Rayhan | News';
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <Container className="my-5">
                <div className="page-title">
                    <h2 className="">📰Latest News</h2>
                </div>
                <Row className="py-5">
                    <Col md={4}>
                        <Card className="blog-card shadow-sm">
                            <Card.Img className="w-30" variant="top" src="https://miro.medium.com/max/800/1*utN6q3uKPz6TpmjffgW_-w.png" />
                            <Card.Body>
                                <Card.Title>Most common JavaScript interview question</Card.Title>
                                <Card.Text>
                                    The most common JavaScript interview question that we should have known for all. Firstly I will prefer Data Types. Data Types are a common cause that we use most of the time.
                                </Card.Text>
                                <a className="btn btn-primary text-white" href="https://krayhan.medium.com/most-common-javascript-interview-question-54c6e2f5a182" rel="noreferrer" target="_blank" class="blog-button">Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="blog-card shadow-sm mb-3">
                            <Card.Img variant="top" src="https://miro.medium.com/max/1360/1*-ePLQbunUgnZUEFQheo3RA.jpeg" />
                            <Card.Body>
                                <Card.Title>React core concept as an absolute beginner</Card.Title>
                                <Card.Text>
                                    React is defined as a JavaScript library for building user interfaces. React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called “FaxJS”.
                                </Card.Text>
                                <a className="btn btn-primary text-white" href="https://krayhan.medium.com/react-core-concept-as-an-absolute-beginner-67d19811cf0a" rel="noreferrer" target="_blank" class="blog-button">Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="blog-card shadow-sm">
                            <Card.Img variant="top" src="https://adrianmejia.com/images/es6-core-features-overview-large.png" />
                            <Card.Body>
                                <Card.Title>small brief of ES6 feature
</Card.Title>
                                <Card.Text>
                                    ES6 refers to version 6 of the ECMA Script programming language. It is a major enhancement to the JavaScript language and adds many more features intended to make large-scale software development easier.
                                </Card.Text>
                                <a className="btn btn-primary text-white" href="https://krayhan.medium.com/a-small-brief-of-es6-feature-3a694a91dde2" rel="noreferrer" target="_blank" class="blog-button">Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="blog-card shadow-sm">
                            <Card.Img variant="top" src="https://miro.medium.com/max/700/1*KA4wM5U_o0eYSVLqNtfUPw.png" />
                            <Card.Body>
                                <Card.Title>10 JavaScript method must be known to a junior JavaScript developer</Card.Title>
                                <Card.Text>
                                    Pop (): use this method to remove the last element of the array. When need or cancel the last element of the array then it's used.
                                    Slice(): use this method, select specific elements of the array and get output in a new array.
                                </Card.Text>
                                <a className="btn btn-primary text-white" href="https://krayhan.medium.com/10-javascript-method-must-be-known-a-junior-javascript-developer-d1065c1ed2c8" rel="noreferrer" target="_blank" class="blog-button">Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="blog-card shadow-sm">
                            <Card.Img variant="top" src="https://miro.medium.com/max/3840/1*C4uEKBan-ML9Q8q5_4HV3Q.jpeg" />
                            <Card.Body>
                                <Card.Title>Now some basic of JavaScript is here</Card.Title>
                                <Card.Text>
                                    Most single seven topic for Strongly basic in the javascript-
                                    1.Variable all things
                                    2.DataType all things
                                    3.Condition all things
                                </Card.Text>
                                <a className="btn btn-primary text-white" href="https://krayhan.medium.com/now-some-basic-of-javascript-is-here-451434b751ec" rel="noreferrer" target="_blank" class="blog-button">Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Fragment>
    );
};

export default News;