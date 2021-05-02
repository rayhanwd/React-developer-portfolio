import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactMail = () => {
    return (
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
            <Button className="mess-btn"type="submit">
                Send Message
  </Button>
        </Form>
    );
};

export default ContactMail;