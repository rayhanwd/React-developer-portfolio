import React from 'react';
import { Fragment } from 'react';
import NavigationBar from '../Elements/NavigationBar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import BlogCard from '../Elements/BlogCard/BlogCard';
import { Container, Row } from 'react-bootstrap';
const News = () => {
    document.title='Rayhan | News';
    return (
        <Fragment>
           <NavigationBar></NavigationBar>
           <Container className="my-5">
               <div className="page-title">
                <h2 className="">📰Latest News</h2>
               </div>
               <Row className="py-5">
               <BlogCard></BlogCard>
               <BlogCard></BlogCard>
               <BlogCard></BlogCard>
               </Row>
           </Container>
            <Footer></Footer>
        </Fragment>
    );
};

export default News;