import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Assets/css/Contact.css';
import Footer from '../Components/Footer/Footer';
import Address from '../Elements/Address/Address';
import ContactForm from '../Elements/ContactForm/ContactForm';
import NavigationBar from '../Elements/NavigationBar/NavigationBar';
const Contact = () => {
    document.title='Rayhan | Contact';
    return (
        <Fragment>
        <NavigationBar></NavigationBar>
        <div className="my-5">
            <Container>
            <div className="page-title">
            <h2>📩Contact me</h2>
            </div>
                <Row>
                    <Col md={4}>
                    <Address></Address>
                    </Col>
                    <Col md={8}>
                <ContactForm></ContactForm>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer></Footer>
    </Fragment>
    );
};

export default Contact;