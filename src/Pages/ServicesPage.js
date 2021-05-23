import React from 'react';
import { Fragment } from 'react';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import Service from './../Components/Service';

const ServicesPage = () => {
    document.title = 'Rayhan | Services';
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <Service></Service>
            <Footer></Footer>
        </Fragment>
    );
};

export default ServicesPage;