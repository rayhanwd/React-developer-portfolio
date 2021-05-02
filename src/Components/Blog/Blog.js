import React from 'react';
import { Container, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';

const Blog = () => {
    return (
        <div className="bg-light my-5 pb-5">
            <div className="text-center  py-5">
                <h4 className="skill-info-text mb-0">Latest Blogs</h4>
                <div className="blog-border"></div>
            </div>
            <Container>
                <Row>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>    
                <BlogCard></BlogCard>    
                </Row>
            </Container>
        </div>
    );
};

export default Blog;