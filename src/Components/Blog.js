import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';

const BlogData = [
    {
        img: 'https://miro.medium.com/max/800/1*utN6q3uKPz6TpmjffgW_-w.png',

        title: 'Most common JavaScript interview question',

        description: 'The most common JavaScript interview question that we should have known for all. Firstly I will prefer Data Types. Data Types are a common cause that we use most of the time.',

        readMore: 'https://krayhan.medium.com/most-common-javascript-interview-question-54c6e2f5a182'
    },
    {
        img: 'https://miro.medium.com/max/1360/1*-ePLQbunUgnZUEFQheo3RA.jpeg',

        title: 'React core concept as an absolute beginner',

        description: 'React is defined as a JavaScript library for building user interfaces. React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called “FaxJS”.',

        readMore: 'https://krayhan.medium.com/react-core-concept-as-an-absolute-beginner-67d19811cf0a'
    },
    {
        img: 'https://adrianmejia.com/images/es6-core-features-overview-large.png',

        title: 'Small brief of ES6 feature',

        description: 'ES6 refers to version 6 of the ECMA Script programming language. It is a major enhancement to the JavaScript language and adds many more features intended to make large-scale software development easier.',

        readMore: 'https://krayhan.medium.com/a-small-brief-of-es6-feature-3a694a91dde2'
    },
    {
        img: 'https://miro.medium.com/max/700/1*KA4wM5U_o0eYSVLqNtfUPw.png',

        title: '10 JavaScript method must be known to a junior JavaScript developer',

        description: 'Array method , is most important part for an junior developer. we can use many methods to do',

        readMore: 'https://krayhan.medium.com/10-javascript-method-must-be-known-a-junior-javascript-developer-d1065c1ed2c8'
    },
    {
        img: 'https://miro.medium.com/max/800/1*utN6q3uKPz6TpmjffgW_-w.png',

        title: 'Now some basic of JavaScript is here',

        description: 'Most single seven topic for Strongly basic in the javascript Variable all things DataType all things Condition all things',

        readMore: 'https://krayhan.medium.com/now-some-basic-of-javascript-is-here-451434b751ec'
    }
]

const Blog = () => {
    return (
        <Container className="my-5">
            <div className="page-title">
                <h2 className="">📰Latest Blogs</h2>
            </div>
            <Row className="py-5">
                {
                    BlogData.map(blog =>
                        <Col key={blog.title} md={4}>
                            <Card className="blog-card shadow-sm mb-5">
                                <Card.Img variant="top" src={blog.img} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.description}
                                    </Card.Text>
                                    <a className="btn btn-primary text-white" href={blog.readMore} rel="noreferrer" target="_blank" class="blog-button">Read more</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default Blog;