import React, { Fragment } from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import Blog from '../Components/Blog/Blog';
import ClientMessage from '../Components/ClientMessage/ClientMessage';
import Contact from '../Components/Contact/Contact';
import EducationAndExperience from '../Components/EducationAndExperiences/EducationAndExperience';
import Footer from '../Components/Footer/Footer';
import Introduction from '../Components/Introduction/Introduction';
import MyFanFact from '../Components/MyFanFact/MyFanFact';
import ProjectSample from '../Components/ProjectSample/ProjectSample';
import Services from '../Components/Services/Services';
import Skills from '../Components/Skills/Skills';
import Testimonial from '../Components/Testimonial/Testimonial';
import TopNavigation from '../Components/TopNavigation/TopNavigation';

const Home = () => {
    document.title='Rayhan | Developer'
    return (
        <Fragment>
        <TopNavigation></TopNavigation>
        <Introduction></Introduction>
        <AboutMe></AboutMe> 
        <Services></Services>
        <MyFanFact></MyFanFact> 
        <Skills></Skills>
        <ClientMessage></ClientMessage>
        <EducationAndExperience></EducationAndExperience>
        <Testimonial></Testimonial>
        <ProjectSample></ProjectSample>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
        </Fragment>
    );
};

export default Home;