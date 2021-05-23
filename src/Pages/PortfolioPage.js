import React from 'react';
import { Fragment } from 'react';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import Portfolio from '../Components/Portfolio';


const PortfolioPage = () => {
    document.title='Rayhan | Portfolio';
    return (
    <Fragment>
      <NavigationBar></NavigationBar>
      <Portfolio></Portfolio>
        <Footer></Footer>
        </Fragment>
    );
};

export default PortfolioPage;