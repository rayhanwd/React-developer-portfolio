import React from 'react';
import { Fragment } from 'react';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Blog from '../Components/Blog';
const BlogsPage = () => {
    document.title = 'Rayhan | Blogs';
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <Blog></Blog>
            <Footer></Footer>
        </Fragment>
    );
};

export default BlogsPage;