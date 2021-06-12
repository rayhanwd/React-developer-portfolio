import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';

const BlogData = [
    {
        img: 'https://miro.medium.com/max/800/1*utN6q3uKPz6TpmjffgW_-w.png',

        title: 'JavaScript interview question',

        readMore: 'https://krayhan.medium.com/most-common-javascript-interview-question-54c6e2f5a182'
    },
    {
        img: 'https://miro.medium.com/max/1360/1*-ePLQbunUgnZUEFQheo3RA.jpeg',

        title: 'React,absolute beginner',

        readMore: 'https://krayhan.medium.com/react-core-concept-as-an-absolute-beginner-67d19811cf0a'
    },
    {
        img: 'https://adrianmejia.com/images/es6-core-features-overview-large.png',

        title: 'Small brief of ES6 feature',

        readMore: 'https://krayhan.medium.com/a-small-brief-of-es6-feature-3a694a91dde2'
    },
    {
        img: 'https://miro.medium.com/max/700/1*KA4wM5U_o0eYSVLqNtfUPw.png',

        title: 'Most important topic of Javascript',

        readMore: 'https://krayhan.medium.com/10-javascript-method-must-be-known-a-junior-javascript-developer-d1065c1ed2c8'
    },
    {
        img: 'https://miro.medium.com/max/800/1*utN6q3uKPz6TpmjffgW_-w.png',

        title: 'Null vs undefined, how define them',

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
                                    <a className="blog-button" href={blog.readMore} rel="noreferrer" target="_blank" >Read more</a>
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