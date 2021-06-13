import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { IoIosMail, IoIosCall, IoIosPin } from "react-icons/io";
import Slide from 'react-reveal/Slide';

const Contact = () => {
    return (
        <div className="my-5">
            <Container>
                <Slide top>
                    <div className="page-title">
                        <h2>📩Contact me</h2>
                    </div>
                </Slide>
                <Row>
                    <Col md={4}>
                        <Slide bottom>
                        <div className="mt-5">
                            <div className="mb-4"><IoIosMail className="contact-icon" /> rayhanbd4400@gmail.com</div>
                            <div className="mb-4"><IoIosCall className="contact-icon" /> +8801992874495</div>
                            <div className="mb-4"><IoIosPin className="contact-icon" /> Jhenaidah,Bangladesh</div>
                        </div>
                        </Slide>
                    </Col>
                    <Col md={8}>
                        <Slide right>
                        <Form className="ml-5">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Your name...</Form.Label>
                                <Form.Control type="name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Your email address...</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your message...</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="contact-btn mt-3" type="submit">
                                Send Message
                            </Button>
                        </Form>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;