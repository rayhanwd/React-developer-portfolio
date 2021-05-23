import React from 'react';
import { Fragment } from 'react';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
const ContactPage = () => {
    document.title='Rayhan | Contact';
    return (
        <Fragment>
        <NavigationBar></NavigationBar>
        <Contact></Contact>
        <Footer></Footer>
    </Fragment>
    );
};

export default ContactPage;