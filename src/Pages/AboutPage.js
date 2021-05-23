import React from 'react';
import { Fragment } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Skills from '../Components/Skills';
import Footer from '../Components/Footer';
import CareerObjective from '../Components/CareerObjective';
const AboutPage = () => {
    document.title='Rayhan | About';
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div className="about-section">
            <CareerObjective></CareerObjective>
            <Skills></Skills>
            </div>
            <Footer></Footer>
        </Fragment>
    );
};

export default AboutPage;