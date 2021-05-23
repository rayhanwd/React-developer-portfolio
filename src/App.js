import React from "react";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Services from "./Pages/ServicesPage";
import Portfolio from "./Pages/PortfolioPage";
import Blogs from "./Pages/BlogsPage";
import Contact from "./Pages/ContactPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route  path="/home">
          <Home></Home>
          </Route>
          <Route  path="/about">
         <About></About>
          </Route>
          <Route  path="/services">
         <Services></Services>
          </Route>
          <Route  path="/portfolio">
         <Portfolio></Portfolio>
          </Route>
          <Route  path="/blogs">
         <Blogs></Blogs>
          </Route>
          <Route  path="/contact">
         <Contact></Contact>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
