import React from 'react';
import { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../Assets/css/portfolio.css';
import Footer from '../Components/Footer/Footer';
import CardBox from '../Elements/ProjectCard/CardBox';
import NavigationBar from '../Elements/NavigationBar/NavigationBar';


const Portfolio = () => {
    document.title='Rayhan | Portfolio';
    return (
        <Fragment>
      <NavigationBar></NavigationBar>
      <div className="my-5 pb-5">
            <Container>
            <div className="page-title">
            <h2 className="">📃Latest Portfolio</h2>
            </div>
                <Row>
               <CardBox></CardBox>
               <CardBox></CardBox>   
               <CardBox></CardBox>   
                </Row>
            </Container>
        </div>
        <Footer></Footer>
        </Fragment>
    );
};

export default Portfolio;