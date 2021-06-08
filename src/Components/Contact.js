import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { IoIosMail, IoIosCall, IoIosPin } from "react-icons/io";
const Contact = () => {
    return (
        <div className="my-5">
            <Container>
                <div className="page-title">
                    <h2>📩Contact me</h2>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="mt-5">
                            <div className="mb-4"><IoIosMail className="contact-icon" /> rayhanbd4400@gmail.com</div>
                            <div className="mb-4"><IoIosCall className="contact-icon" /> +8801992874495</div>
                            <div className="mb-4"><IoIosPin className="contact-icon" /> Jhenaidah,Bangladesh</div>
                        </div>
                    </Col>
                    <Col md={8}>
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
                            <Button className="mess-btn" type="submit">
                                Send Message
  </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;