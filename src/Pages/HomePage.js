import React from 'react';
import Header from '../Components/Header';
import Skills from './../Components/Skills';
import CareerObjective from './../Components/CareerObjective';
import Service from './../Components/Service';
import Portfolio from './../Components/Portfolio';
import Blog from './../Components/Blog';
import Contact from './../Components/Contact';
import Footer from './../Components/Footer';
const HomePage = () => {
  document.title = 'Developer | Portfolio';
  return (
    <>
      <header className='home-main min-vh-100'>
      <Header></Header>
      </header>
      <section><CareerObjective></CareerObjective></section>
      <section><Skills></Skills></section>
      <section><Service></Service></section>
      <section><Portfolio></Portfolio></section>
      <section><Blog></Blog></section>
      <section><Contact></Contact></section>
      <footer><Footer></Footer></footer>
    </>
  );
};

export default HomePage;