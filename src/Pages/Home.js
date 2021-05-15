import React from 'react';
import Header from '../Components/Header/Header';
import '../Assets/css/Home.css';
const Home = () => {
    document.title='Rayhan | Home';
    return (
      <div className='home-main min-vh-100'>
      <Header></Header>
      </div>
    );
};

export default Home;