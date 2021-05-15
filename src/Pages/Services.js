import React from 'react';
import { Fragment } from 'react';
import { Row, Container } from "react-bootstrap";
import Footer from '../Components/Footer/Footer';
import '../Assets/css/services.css';
import NavigationBar from '../Elements/NavigationBar/NavigationBar';
import ServicesCard from '../Elements/ServicesCard/ServicesCard';
const Services = () => {
    document.title='Rayhan | Services';
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div className="my-5">
                <Container>
                <div className="page-title">
                    <h2 className="">🚛Our Services</h2>
                </div>
                    <Row>
                        <ServicesCard></ServicesCard>
                        <ServicesCard></ServicesCard>
                        <ServicesCard></ServicesCard>
                        <ServicesCard></ServicesCard>
                        <ServicesCard></ServicesCard>
                        <ServicesCard></ServicesCard>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </Fragment>
    );
};

export default Services;